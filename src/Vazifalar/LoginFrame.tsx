const LoginFrame = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>


                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:border-blue-500 transition"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 rounded-lg border 
               focus:outline-none   
               transition"
                    />
                </div>
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
             hover:bg-blue-700 active:scale-95 transition"
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}

export default LoginFrame