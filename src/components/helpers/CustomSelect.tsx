import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function CustomSelect({ options, width, defaults, handleOnSelectChange }: { options: string[], width: string, defaults: string; handleOnSelectChange?: (option: string) => void; }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaults);

  useEffect(() => {
    if (handleOnSelectChange) {
      handleOnSelectChange(selectedOption);
    }
  }, [selectedOption]);

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsOpen(false);
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    setIsOpen(false);

  };



  return (
    <div className="relative text-[12px]" title={selectedOption}>
      <button
        type="button"
        style={{ width: width }}
        className={`py-1 px-[5px] text-left bg-white border border-[#DFDFDF] shadow-sm`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <p className='w-full flex items-center justify-between'>
          <span className='truncate'>{selectedOption}</span>
          <MdKeyboardArrowDown className={`duration-500  text-xl xs:text-2xl text-[#222529] ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </p>
      </button>
      <div
        className={`absolute z-30 w-full mt-1 bg-white border border-[#DFDFDF]  shadow-lg transform transition-transform duration-500 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
        style={{ transformOrigin: 'top' }}
      >
        {isOpen && (
          <div className="divide-y divide-[#DFDFDF]">
            {options.map((option) => (
              <button
                title={option}
                type="button"
                key={option}
                className={`block truncate w-full py-1 px-2 text-left hover:text-[#222529] hover:bg-[#1e90ff] ${selectedOption === option ? 'bg-[#1e90ff] text-[#222529]' : 'bg-white'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default CustomSelect;