interface Props {
  text: string;
}

const TestimonialBadge = ({ text }: Props) => {
  return (
    <blockquote className="relative pl-4 border-l-4 border-orange-300">
      “{text}”
    </blockquote>
  );
};

export default TestimonialBadge;
