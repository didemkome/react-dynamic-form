interface UserData {
  fullname: string;
  email: string;
  password: string;
  remember?: boolean;
}

export const UserDetails = () => {
  const userDataStr = localStorage.getItem("userData");
  const userData: UserData | null = userDataStr ? JSON.parse(userDataStr) : null;

  if (!userData) {
    return <p className="text-center mt-8">No user data found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">User Details</h2>
        <div className="space-y-4">
          <p><strong>Full Name:</strong> {userData.fullname}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Password:</strong> {userData.password}</p>
          <p><strong>Remember Me:</strong> {userData.remember ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};