import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-darker-bg p-6 rounded-lg border border-dark-gray hover:border-bright-teal transition-all duration-500">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-bright-teal text-bright-teal" />
        ))}
      </div>
      <p className="text-light-gray mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
      <div className="border-t border-dark-gray pt-4">
        <div className="font-semibold text-white font-poppins">{testimonial.name}</div>
        <div className="text-bright-teal text-sm">{testimonial.role}</div>
        {testimonial.company && (
          <div className="text-medium-gray text-sm">{testimonial.company}</div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;