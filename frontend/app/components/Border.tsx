type BorderProps = {
  classes: string;
};

const Border = ({ classes }: BorderProps) => {
  return (
    <div className={`${classes}`}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 514.81 507.62"
      >
        <rect className="cls-1" x="8.96" y="8.5" width="71.25" height="71.25" />
        <rect
          className="cls-1"
          x="8.5"
          y="132.82"
          width="71.25"
          height="71.25"
        />
        <rect
          className="cls-1"
          x="132.59"
          y="8.5"
          width="71.25"
          height="71.25"
        />
        <line className="cls-1" x1="80.21" y1="79.75" x2="79.75" y2="132.82" />
        <polyline
          className="cls-1"
          points="514.81 8.5 256.69 8.5 256.69 132.82 79.75 132.82"
        />
        <polyline
          className="cls-1"
          points="8.96 507.62 8.96 257.92 132.59 257.92 132.59 79.75"
        />
        <line className="cls-1" x1="80.21" y1="79.75" x2="132.59" y2="79.75" />
        <polyline
          className="cls-2"
          points="413.71 38.86 284.26 38.86 284.26 162.18 160.18 162.18 160.18 286.26 35.55 286.26 35.32 293.92 35.32 422.6"
        />
      </svg>
    </div>
  );
};

export default Border;
