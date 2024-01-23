function UploadProjectForm() {
  return (
    <form>
      <label
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="user_avatar"
      >
        Upload file
      </label>
      <input
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="user_avatar"
        type="file"
      />
      <div
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="user_avatar_help"
      >
        A profile picture is useful to confirm your are logged into your account
      </div>
    </form>
  );
}

export default UploadProjectForm;
