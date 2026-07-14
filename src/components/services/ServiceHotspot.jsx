function ServiceHotspot({label, left, top}) {
  return (
    <button aria-label={label} className="absolute grid size-[26px] place-items-center rounded-full bg-white" style={{left, top}} type="button">
      <span aria-hidden="true" className="relative block size-2.5">
        <span className="absolute left-[3.75px] top-[3.75px] size-[2.5px] rounded-full bg-black" />
        <span className="absolute left-[3.75px] top-0 size-[2.5px] rounded-full bg-black" />
        <span className="absolute bottom-0 left-[3.75px] size-[2.5px] rounded-full bg-black" />
        <span className="absolute left-0 top-[3.75px] size-[2.5px] rounded-full bg-black" />
        <span className="absolute right-0 top-[3.75px] size-[2.5px] rounded-full bg-black" />
      </span>
    </button>
  )
}

export default ServiceHotspot
