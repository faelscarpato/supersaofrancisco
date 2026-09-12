export default function StarRating({
  rating,
  size = 'md',
  className = '',
}: {
  rating: number;
  size?: 'sm' | 'md';
  className?: string;
}) {
  const px = size === 'sm' ? 'text-[13px]' : 'text-[15px]';
  return (
    <span className={`inline-flex items-center gap-0.5 text-amber-400 ${px} ${className}`} aria-label={`${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i;
        const half = !filled && rating >= i - 0.5;
        return (
          <i
            key={i}
            className={
              half
                ? 'fa-solid fa-star-half-stroke'
                : filled
                  ? 'fa-solid fa-star'
                  : 'fa-regular fa-star text-slate-300'
            }
          />
        );
      })}
    </span>
  );
}