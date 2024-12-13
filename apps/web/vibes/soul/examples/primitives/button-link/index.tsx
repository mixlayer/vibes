import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/vibes/soul/primitives/button-link';

const variants = ['primary', 'secondary', 'tertiary', 'ghost'] as const;
const shapes = ['pill', 'rounded', 'square', 'circle'] as const;
const sizes = ['large', 'medium', 'small', 'x-small'] as const;

export default function Preview() {
  return (
    <div className="flex h-screen flex-col items-center gap-x-4 gap-y-6 px-6 py-8">
      {variants.map((variant) => (
        <div className="flex flex-col items-center gap-x-4 gap-y-6 px-6 py-8" key={variant}>
          {shapes.map((shape) => (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3" key={shape}>
              {sizes.map((size) => (
                <ButtonLink href="#" key={size} shape={shape} size={size} variant={variant}>
                  {shape === 'circle' ? <ArrowRight size={20} /> : 'Shop now'}
                </ButtonLink>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
