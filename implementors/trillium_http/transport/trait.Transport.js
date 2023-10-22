(function() {var implementors = {
"trillium_async_std":[["impl Transport for <a class=\"struct\" href=\"trillium_async_std/struct.AsyncStdTransport.html\" title=\"struct trillium_async_std::AsyncStdTransport\">AsyncStdTransport</a>&lt;TcpStream&gt;"],["impl Transport for <a class=\"struct\" href=\"trillium_async_std/struct.AsyncStdTransport.html\" title=\"struct trillium_async_std::AsyncStdTransport\">AsyncStdTransport</a>&lt;UnixStream&gt;"]],
"trillium_http":[],
"trillium_native_tls":[["impl&lt;T: Transport&gt; Transport for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsTransport.html\" title=\"struct trillium_native_tls::NativeTlsTransport\">NativeTlsTransport</a>&lt;T&gt;"]],
"trillium_rustls":[["impl&lt;T: Transport&gt; Transport for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsTransport.html\" title=\"struct trillium_rustls::RustlsTransport\">RustlsTransport</a>&lt;T&gt;"]],
"trillium_server_common":[["impl&lt;T, U&gt; <a class=\"trait\" href=\"trillium_server_common/trait.Transport.html\" title=\"trait trillium_server_common::Transport\">Transport</a> for <a class=\"enum\" href=\"trillium_server_common/enum.Binding.html\" title=\"enum trillium_server_common::Binding\">Binding</a>&lt;T, U&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"trillium_server_common/trait.Transport.html\" title=\"trait trillium_server_common::Transport\">Transport</a>,\n    U: <a class=\"trait\" href=\"trillium_server_common/trait.Transport.html\" title=\"trait trillium_server_common::Transport\">Transport</a>,</span>"]],
"trillium_smol":[["impl Transport for <a class=\"struct\" href=\"trillium_smol/struct.SmolTransport.html\" title=\"struct trillium_smol::SmolTransport\">SmolTransport</a>&lt;TcpStream&gt;"],["impl Transport for <a class=\"struct\" href=\"trillium_smol/struct.SmolTransport.html\" title=\"struct trillium_smol::SmolTransport\">SmolTransport</a>&lt;UnixStream&gt;"]],
"trillium_testing":[["impl Transport for <a class=\"struct\" href=\"trillium_testing/struct.TestTransport.html\" title=\"struct trillium_testing::TestTransport\">TestTransport</a>"]],
"trillium_tokio":[["impl Transport for <a class=\"struct\" href=\"trillium_tokio/struct.TokioTransport.html\" title=\"struct trillium_tokio::TokioTransport\">TokioTransport</a>&lt;Compat&lt;UnixStream&gt;&gt;"],["impl Transport for <a class=\"struct\" href=\"trillium_tokio/struct.TokioTransport.html\" title=\"struct trillium_tokio::TokioTransport\">TokioTransport</a>&lt;Compat&lt;TcpStream&gt;&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()