import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center py-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.341893453018!2d77.56725279357912!3d13.056604900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194e732fe773%3A0xf9f083e00a4a8893!2sMEDSCRAFT%20HEALTHCARE!5e0!3m2!1sen!2sin!4v1729254919174!5m2!1sen!2sin"
        className="w-full lg:h-[450px] md:h-[400px] h-[300px] border-0"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
