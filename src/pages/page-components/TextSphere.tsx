import React, { useEffect } from "react";

import "./TextSphere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "Student",
        "Scientist",
        "Programmer",
        "Creator",
        "Innovator",
        "Worker",
        "Thinker",
        "Engineer",
        "Learner",
        "Competitor",
        "Developer",
        "Temp",
        "Temp"
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div className="text-sphere">
      <div className = "bloom"></div>
      {/* span tag className must be "tagcloud"  */}
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;