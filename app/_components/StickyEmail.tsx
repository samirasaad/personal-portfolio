import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-52 left-0 block">
            <p
                className="px-3 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </p>
            <p
                         style={{
                            textOrientation: 'mixed',
                            writingMode: 'vertical-rl',
                        }}    className="px-3 py-9 text-muted-foreground tracking-[1px] transition-all !bg-bottom hover:text-foreground hover:!bg-center"
>{GENERAL_INFO.phone}</p>
        </div>
    );
};

export default StickyEmail;
