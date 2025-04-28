import { FC, ComponentPropsWithRef as Props } from 'react';

const Image: FC<{ image: string, alt: string } & Props<'picture'>> = ({
  image,
  alt,
  className,
  ...props
}) => {
  return (
    <picture {...props}>
      <source
        className={className}
        media='(min-width:1440px)'
        srcSet={`./src/assets/products/${image}/image-desktop.jpg`}
      />
      <source
        className={className}
        media='(min-width:760px)'
        srcSet={`./src/assets/products/${image}/image-tablet.jpg`}
      />
      <img
        alt={alt}
        loading='lazy'
        className={className}
        src={`./src/assets/products/${image}/image-mobile.jpg`}
      />
    </picture>
  );
};

export default Image;
