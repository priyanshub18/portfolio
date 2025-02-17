import React from 'react';
import TechIcon from '@/components/TechIcon';
import { twMerge } from 'tailwind-merge';
import { Fragment } from 'react';
function ToolItems({
  toolboxItems,
  className,
  itemsWrapperclassName,
}: {
  toolboxItems: {
    title: string;
    icontype: React.ElementType;
  }[];
  className?: string;
  itemsWrapperclassName?: string;
}) {
  return (
    <div
      className={twMerge(
        'flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ',
        className,
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6',
          itemsWrapperclassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => {
          return (
            <Fragment key={idx}>
              {toolboxItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/20 rounded-lg'
                  >
                    <TechIcon component={item.icontype} />
                    <span className='font-semibold'>{item.title}</span>
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
      {/* @ts-ignore */}
    </div>
  );
}

export default ToolItems;
