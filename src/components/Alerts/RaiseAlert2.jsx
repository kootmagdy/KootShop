import React,{useEffect, useRef} from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { capitalizeFirstLetter } from "../../utils";
import $ from "jquery";

export default function RaiseAlert2({ state, message }) {
  const [open, setOpen] = React.useState(true);
  const alertRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      // Remove the alert after 3 seconds
      $(alertRef.current).fadeOut(300, () => {
        setOpen(false);
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <React.Fragment>
      {open && (
        <div
          className={`alert alert-${state === "success" ? "success" : "danger"} alert-dismissible fade show max-w-screen-md`}
          role="alert"
          ref={alertRef}
        >
          <div className="d-flex align-items-center">
            {state === "success" ? (
              <CheckCircleIcon className="w-25" />
            ) : (
              <XCircleIcon className="w-25" />
            )}
            <div>
              <h5 className="alert-heading">{capitalizeFirstLetter(state)}</h5>
              <p className="mb-0">{message}</p>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
  
  }
