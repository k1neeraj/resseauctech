"use client";

import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      if (!window.google || !mapRef.current) return;

      const center = { lat: 28.5352, lng: 77.2100 };

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 18,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
      });

      new window.google.maps.Marker({
        position: center,
        map,
        title: "Resseaux Tech - Sales Office",
        animation: window.google.maps.Animation.DROP,
      });
    };

    if (window.google && window.google.maps) {
      loadMap();
      return;
    }

    const scriptId = "google-maps-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
    script.async = true;
    script.defer = true;
    script.onload = loadMap;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-6 top-6 z-10 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
        <p className="text-sm font-semibold text-slate-900">
          Resseaux Tech – Sales Office
        </p>
        <p className="mt-1 text-xs text-slate-600">
          T-19A, Malviya Nagar, Near Krishna Mandir, New Delhi - 110017
        </p>
      </div>

      <div ref={mapRef} className="h-[500px] w-full" />
    </section>
  );
}