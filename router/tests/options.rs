use trillium_router::*;
use trillium_testing::{prelude::*, TestConn};

#[test]
fn options_star_with_a_star_handler() {
    let router = Router::new()
        .get("*", "ok")
        .post("/some/specific/route", "ok");
    let mut conn = TestConn::build("options", "*", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "GET, POST");
}

#[test]
fn options_specific_route_with_several_matching_methods() {
    let router = Router::new()
        .get("*", "ok")
        .post("/some/specific/route", "ok")
        .delete("/some/specific/:anything", "ok");

    let mut conn = TestConn::build("options", "/some/specific/route", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "DELETE, GET, POST");

    let mut conn = TestConn::build("options", "/some/specific/other", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "DELETE, GET");

    let mut conn = TestConn::build("options", "/only-get", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "GET");
}

#[test]
fn options_specific_route_with_no_matching_routes() {
    let router = Router::new()
        .post("/some/specific/route", "ok")
        .delete("/some/specific/:anything", "ok");

    let mut conn = TestConn::build("options", "/other", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "");
}

#[test]
fn options_any() {
    let router = Router::new().any("/some-route", "ok");
    let mut conn = TestConn::build("options", "*", ()).on(&router);
    assert_status!(&conn, 200);
    assert_headers!(&mut conn, "allow" => "DELETE, GET, PATCH, POST, PUT");
}

#[test]
fn when_options_are_disabled() {
    let router = Router::new().without_options_handling().any("*", "ok");
    assert_not_handled!(TestConn::build("options", "/", ()));
}
