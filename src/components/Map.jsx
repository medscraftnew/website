import React from 'react';

const Map = () => {
  return (
    <div className="flex justify-center py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099466!2d144.95373531584706!3d-37.81720997975155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f84c31d%3A0x5045675218ceed31!2sMelbourne%20Central%2C%20100%20%2F%20King%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1622200951726!5m2!1sen!2sus"
        className="w-full lg:h-[450px] md:h-[400px] h-[300px] border-0"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
