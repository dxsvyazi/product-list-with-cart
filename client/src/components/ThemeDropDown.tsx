import { FC, ElementType, useState } from 'react';
import Button from './base/Button';
import DropDown from './base/DropDown';
import { Props } from '@shared/types/types';
import Conditional from './base/Conditional';
import SunFillIcon from '@images/SunFillIcon';
import SunIcon from '@images/SunIcon';
import MoonFillIcon from '@images/MoonFillIcon';
import MoonIcon from '@images/MoonIcon';
import SystemFillIcon from '@images/SystemIcon';
import SystemIcon from '@images/SystemFillIcon';

const ThemeButton: FC<
  Props<typeof Button> & {
    iconOn: ElementType;
    iconOff: ElementType;
    state: boolean;
  }
> = ({ iconOn: IconOn, iconOff: IconOff, state, children, ...props }) => (
  <Button {...props}>
    <Conditional con={state} fallback={<IconOff />}>
      <IconOn />
    </Conditional>
    {children}
  </Button>
);

const ThemeDropDown: FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <DropDown
      className='bg-info-primary'
      selected={selected}
      variants={{ flow: 'col', items: 'centered', rounded: 'xl' }}
      items={[
        {
          props: {
            iconOn: SunFillIcon,
            iconOff: SunIcon,
            children: 'Light',
            state: selected === 0,
            onClick: () => setSelected(0),
            className: 'w-full gap-1 text-sm text-white rounded-xl p-2',
          },
          as: ThemeButton,
        },
        {
          props: {
            iconOn: MoonFillIcon,
            iconOff: MoonIcon,
            children: 'Dark',
            state: selected === 1,
            onClick: () => setSelected(1),
            className: 'w-full gap-1 text-sm text-white rounded-xl p-2',
          },
          as: ThemeButton,
        },
        {
          props: {
            iconOn: SystemFillIcon,
            iconOff: SystemIcon,
            children: 'System',
            state: selected === 2,
            onClick: () => setSelected(2),
            className: 'w-full gap-1 text-sm text-white rounded-xl p-2',
          },
          as: ThemeButton,
        },
      ]}
    />
  );
};

export default ThemeDropDown;
