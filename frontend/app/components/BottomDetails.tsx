import Link from "next/link";

const BottomDetails = () => {
  return (
    <div className="h-[25%] py-2 w-full flex flex-row  justify-end gap-40 pr-6 items-end absolute bottom-0  left-0 z-50">
      {/* Social Icons */}
      <div className="flex gap-8 text-orange-200 px-6 md:px-0">
        {/* Call Icon */}
        <Link href={"tel:+977 9801042715"}>
          <svg
            className="xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
        </Link>

        {/* Instagram Icon */}
        <Link
          href={"https://www.instagram.com/skyxnepal?igsh=NXJ3a3I0NXo5cmg="}
          target="_blank"
        >
          <svg
            className="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </Link>

        {/* Facebook Icon */}
        <Link
          href={"https://www.facebook.com/share/17mJaLG2E1/?mibextid=wwXIfr"}
          target="_blank"
        >
          <svg
            className="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </Link>

        {/* Map Icon */}
        <Link
          href={
            "https://www.google.com/viewer/place?client=safari&sca_esv=264bc8d324b7ce73&hl=en-np&output=search&mid=/g/11zjq7ll5l&pip=CgVza3kgeBAC&lqi=Cgtza3kgeCBuZXBhbEiykeXjwr6AgAhaHxAAEAEYABgBGAIiC3NreSB4IG5lcGFsKgYIAhAAEAGSAQRjbHVimgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxYWVWVlhVVEpoYmtKU1drTXdlVk5HUWpWa00xWklZMFp3YUZWV1JSQUKqATMQATIeEAEiGuAc5AAVL0eD3O8nN34wj1etXOhrSGGBAbwwMg8QAiILc2t5IHggbmVwYWz6AQQIABAN&phdesc=ECvqVY024Zg&sa=X&ved=2ahUKEwjLgr_WgOWQAxUnkO4BHZjUJecQkbkFKAB6BAgyEAg"
          }
          target="_blank"
        >
          <svg
            className="hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </Link>
      </div>

      {/* Contact number and location details */}
      <div className="xl:flex gap-8 text-orange-200 hidden">
        <Link href={"tel:+977 9801042715"}>
          <h1 className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            9801042715
          </h1>
        </Link>

        <Link
          href={
            "https://www.google.com/viewer/place?client=safari&sca_esv=264bc8d324b7ce73&hl=en-np&output=search&mid=/g/11zjq7ll5l&pip=CgVza3kgeBAC&lqi=Cgtza3kgeCBuZXBhbEiykeXjwr6AgAhaHxAAEAEYABgBGAIiC3NreSB4IG5lcGFsKgYIAhAAEAGSAQRjbHVimgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxYWVWVlhVVEpoYmtKU1drTXdlVk5HUWpWa00xWklZMFp3YUZWV1JSQUKqATMQATIeEAEiGuAc5AAVL0eD3O8nN34wj1etXOhrSGGBAbwwMg8QAiILc2t5IHggbmVwYWz6AQQIABAN&phdesc=ECvqVY024Zg&sa=X&ved=2ahUKEwjLgr_WgOWQAxUnkO4BHZjUJecQkbkFKAB6BAgyEAg"
          }
          target="_blank"
        >
          <h1 className="flex justify-center items-center gap-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <path d="M13 2a9 9 0 0 1 9 9" />
            <path d="M13 6a5 5 0 0 1 5 5" />
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            SKYWALK TOWER KMC 28, BAJHANG ROAD, KAMALADI, KATHMANDU
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default BottomDetails;
