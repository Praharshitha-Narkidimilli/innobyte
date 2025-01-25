import React from 'react';

function Map({ src }) {
  return (
    <div className="overflow-hidden relative w-full h-96 mb-2">
      <iframe
        title="Location Map"
        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25598.579123922445!2d86.84397745933502!3d23.585475555458345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1735029957124!5m2!1sen!2sin"}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 h-full w-full absolute left-0 top-0"
      />
    </div>
  );
}


export default Map;
