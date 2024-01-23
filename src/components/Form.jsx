function Form() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b m-2 border-gray-900/10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Contact me
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message:
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  className="block w-full h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="facebook: nara&#10;telegram: 011233223&#10;&#10;I'm interested in your work!

                  "
                ></textarea>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write your message and contact your contact information here.
              </p>
            </div>
          </div>
          <button
            className="hover:bg-green-300 rounded-md cursor-pointer pl-2 pr-2 mt-6 mb-2"
            onClick={() => {}}
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
