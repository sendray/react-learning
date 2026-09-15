const CardContainerNotes = () => {
  return (
    <div className="my-5">
      <h2 className="font-extrabold text-(--fg-muted) mb-3">Features</h2>
      <ul className="list-disc ml-5 text-xs text-(--fg-muted)">
        <li>
          <span className="font-bold">useState()</span> — Manages{" "}
          <span className="font-bold">usersDetails</span>
          state within the component
        </li>
        <li>
          <span className="font-bold">useEffect()</span> — Fetches user list
          data from the specified{" "}
          <span className="font-bold">
            https://mockserver.in/fake-api/users
          </span>
        </li>
        <li>
          <span className="font-bold">Async/Await</span> — Handles asynchronous
          data fetching with modern syntax for readability and error management.
        </li>
        <li>
          <span className="font-bold">Object destructuring</span> — Simplifies
          access to object properties for cleaner code.
        </li>
        <li>
          <span className="font-bold">Component composition</span> — Integrates
          reusable `Card` and `CardContainer` components for structured UI.
        </li>
        <li>
          <span className="font-bold">Filter</span> — Enables quick lookup of
          items using a name-based search functionality.
        </li>
        <li>
          <span className="font-bold">Tailwind CSS</span> — Utilized for
          crafting a clean, responsive, and user‑friendly interface design.
        </li>
        <li>
          <span className="font-bold">Parcel</span> — Used as the project’s
          build system, providing zero‑config setup, fast builds, and automatic
          optimizations for development and production.
        </li>
      </ul>
    </div>
  );
};

export default CardContainerNotes;
