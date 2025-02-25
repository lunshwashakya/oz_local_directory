
function Login() {
    return(
        <>
        <img src="deepseek_logo.svg" alt="" />
        <p className="text-gray-500 mb-4 var(--text-xs)" >Only login via email, Google, or +86 phone number login is supported in your region.</p>
        <input type="text" id="Phone number / email address"/>
        <input type="text" id="Password"/><br />
        <input type="radio" name="conset" id="conset" /><p>I confirm that I have read, consent and agree to DeepSeek'sA <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html">Terms of Use</a> and <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html">Privacy Policy</a></p>
        <input type="button" value="Log in" />
        </>
    );
}

export default Login;