'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, HelpCircle, Activity } from 'lucide-react';

export default function MilestoneSimulator() {
  const [weeksEarly, setWeeksEarly] = useState(8);
  const [actualAge, setActualAge] = useState(6); // in months
  const canvasRef = useRef(null);

  // Calculate corrected age in months
  const monthsEarly = weeksEarly / 4;
  const correctedAge = Math.max(0, actualAge - monthsEarly);

  // Milestone data map
  const milestonesData = [
    {
      range: [0, 2],
      title: '0 to 2 Months Focus',
      items: [
        'Reacts to sudden loud sounds by startling or turning',
        'Begins to focus on faces and track moving objects visually',
        'Lifts head and chest briefly during tummy time',
        'Makes soft cooing or gurgling sounds when spoken to'
      ]
    },
    {
      range: [2, 4],
      title: '2 to 4 Months Focus',
      items: [
        'Holds head steady and upright without support',
        'Brings hands to mouth and grasps small rattles',
        'Reaches for dangling toys and shakes them',
        'Smiles responsively to primary caregivers and sounds'
      ]
    },
    {
      range: [4, 6],
      title: '4 to 6 Months Focus',
      items: [
        'Rolls over from front to back and back to front',
        'Grasps objects and transfers them from one hand to the other',
        'Supports weight on legs when held in a standing position',
        'Responds to name and makes vowel consonant babbling sounds'
      ]
    },
    {
      range: [6, 9],
      title: '6 to 9 Months Focus',
      items: [
        'Sits steadily without support or leaning on hands',
        'Pulls self up to a standing position using furniture',
        'Responds to simple verbal requests and gestures',
        'Babbles syllables like mamama, dadada, or bababa'
      ]
    },
    {
      range: [9, 12],
      title: '9 to 12 Months Focus',
      items: [
        'Crawls or scoots efficiently on hands and knees',
        'Stands independently and may take first steps with support',
        'Uses simple word sounds like mama or dada to mean parents',
        'Waves goodbye and responds to simple verbal cues'
      ]
    }
  ];

  // Get active milestone items based on age
  const getActiveMilestones = (age) => {
    const matched = milestonesData.find(
      (m) => age >= m.range[0] && age <= m.range[1]
    );
    return matched || milestonesData[0];
  };

  const actualMilestones = getActiveMilestones(actualAge);
  const correctedMilestones = getActiveMilestones(correctedAge);

  // Render the canvas graph
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-DPI scaling
    const dpr = window.devicePixelRatio || 1;
    const width = 600;
    const height = 180;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = '100%';
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Styling constants
    const paddingX = 50;
    const centerY = 100;
    const axisWidth = width - paddingX * 2;
    const tickSpacing = axisWidth / 12;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background tracks/grid
    ctx.fillStyle = '#FFFDF8';
    ctx.fillRect(0, 0, width, height);

    // Draw developmental stage zones
    const zones = [
      { start: 0, end: 2, label: '0-2m', fill: 'rgba(255, 154, 134, 0.05)' },
      { start: 2, end: 4, label: '2-4m', fill: 'rgba(255, 179, 153, 0.05)' },
      { start: 4, end: 6, label: '4-6m', fill: 'rgba(255, 214, 166, 0.05)' },
      { start: 6, end: 9, label: '6-9m', fill: 'rgba(255, 240, 190, 0.05)' },
      { start: 9, end: 12, label: '9-12m', fill: 'rgba(255, 253, 248, 0.05)' }
    ];

    zones.forEach((z) => {
      const zx1 = paddingX + z.start * tickSpacing;
      const zx2 = paddingX + z.end * tickSpacing;
      ctx.fillStyle = z.fill;
      ctx.fillRect(zx1, 20, zx2 - zx1, 100);
      
      // Label text
      ctx.fillStyle = '#6E4F45';
      ctx.font = 'bold 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(z.label, (zx1 + zx2) / 2, 35);
    });

    // Draw main horizontal axis line
    ctx.beginPath();
    ctx.moveTo(paddingX, centerY);
    ctx.lineTo(width - paddingX, centerY);
    ctx.strokeStyle = '#rgba(43, 31, 27, 0.15)';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw month ticks and labels
    for (let i = 0; i <= 12; i++) {
      const tx = paddingX + i * tickSpacing;
      
      ctx.beginPath();
      ctx.moveTo(tx, centerY - 6);
      ctx.lineTo(tx, centerY + 6);
      ctx.strokeStyle = '#6E4F45';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#6E4F45';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(i.toString(), tx, centerY + 20);
    }
    
    // Label axis
    ctx.font = 'bold 9px sans-serif';
    ctx.fillText('Chronological Months', width - paddingX, centerY + 35);

    // Calculate positions
    const actualX = paddingX + actualAge * tickSpacing;
    const correctedX = paddingX + correctedAge * tickSpacing;

    // Draw connection shift bracket/arrow (if there is a gap)
    if (actualAge > correctedAge) {
      ctx.beginPath();
      ctx.moveTo(actualX, centerY - 15);
      ctx.lineTo(actualX, centerY - 45);
      ctx.lineTo(correctedX, centerY - 45);
      ctx.lineTo(correctedX, centerY - 15);
      
      ctx.strokeStyle = '#FF9A86';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Shift text label
      ctx.fillStyle = '#FF9A86';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`-${weeksEarly} weeks early`, (actualX + correctedX) / 2, centerY - 52);
    }

    // Draw Actual Chronological Age point (Amber alert circle)
    ctx.beginPath();
    ctx.arc(actualX, centerY, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#FFEBE6';
    ctx.fill();
    ctx.strokeStyle = '#FFB399';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw Corrected Age point (Green safety circle)
    ctx.beginPath();
    ctx.arc(correctedX, centerY, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#DCFCE7';
    ctx.fill();
    ctx.strokeStyle = '#22C55E';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw labels for points
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    
    ctx.fillStyle = '#FF9A86';
    ctx.fillText('Actual', actualX, centerY - 25);
    
    ctx.fillStyle = '#22C55E';
    ctx.fillText('Corrected', correctedX, centerY - 25);

  }, [weeksEarly, actualAge, correctedAge]);

  return (
    <div className="bg-brand-rose/30 border border-brand-coral/25 rounded-3xl p-6 md:p-8 shadow-soft" id="milestone-simulator-box">
      <div className="flex items-center space-x-3 mb-6">
        <Activity className="w-6 h-6 text-brand-coral" />
        <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
          Corrected Milestone Simulator
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Slider 1: Weeks born early */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="weeks-early-slider" className="font-display font-bold text-brand-deep">
                Weeks Born Early:
              </label>
              <span className="text-brand-coral font-bold">{weeksEarly} Weeks</span>
            </div>
            <input
              type="range"
              id="weeks-early-slider"
              min="0"
              max="12"
              step="1"
              value={weeksEarly}
              onChange={(e) => setWeeksEarly(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-apricot rounded-lg appearance-none cursor-pointer accent-brand-coral"
            />
            <p className="text-[10px] text-brand-brown/70 leading-relaxed">
              Calculates to {monthsEarly} months early based on the standard 40-week term baseline.
            </p>
          </div>

          {/* Slider 2: Actual chronological age */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label htmlFor="actual-age-slider" className="font-display font-bold text-brand-deep">
                Actual Age (since birth):
              </label>
              <span className="text-brand-coral font-bold">{actualAge} Months</span>
            </div>
            <input
              type="range"
              id="actual-age-slider"
              min="0"
              max="12"
              step="1"
              value={actualAge}
              onChange={(e) => setActualAge(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-apricot rounded-lg appearance-none cursor-pointer accent-brand-coral"
            />
            <p className="text-[10px] text-brand-brown/70 leading-relaxed">
              Chronological time elapsed since the actual birth date.
            </p>
          </div>

          {/* Math Output Summary Box */}
          <div className="bg-brand-white rounded-2xl p-4 border border-brand-coral/10 space-y-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral block">
              Calculation Logic
            </span>
            <div className="text-sm font-display text-brand-deep font-semibold">
              Corrected Age:
              <span className="text-green-600 block text-lg font-bold mt-1">
                {correctedAge} Months
              </span>
            </div>
            <p className="text-xs text-brand-brown leading-relaxed">
              Your baby is chronologically {actualAge} months old, but should be evaluated as a **{correctedAge} month old** when tracking developmental milestones.
            </p>
          </div>

        </div>

        {/* Graph & Comparison Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Canvas Graph container */}
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-4 shadow-inner overflow-hidden">
            <canvas ref={canvasRef} />
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Unadjusted standard comparison */}
            <div className="bg-brand-white/80 border border-brand-coral/10 rounded-2xl p-4 space-y-3 opacity-60">
              <span className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">
                Unadjusted (Chronological)
              </span>
              <h4 className="font-display font-bold text-brand-deep text-sm">
                Evaluating at {actualAge} Months
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-brown">
                {actualMilestones.items.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corrected comparison */}
            <div className="bg-brand-white border border-green-200 rounded-2xl p-4 space-y-3 ring-2 ring-green-400/20 shadow-soft">
              <span className="inline-flex items-center text-[10px] font-sans font-bold uppercase tracking-wider text-green-600">
                Corrected Development
              </span>
              <h4 className="font-display font-bold text-brand-deep text-sm">
                Evaluating at {correctedAge} Months
              </h4>
              <ul className="space-y-1.5 text-xs text-brand-brown">
                {correctedMilestones.items.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5 mr-2" />
                    <span className="font-semibold text-brand-deep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="bg-brand-white rounded-2xl p-4 border border-brand-coral/10 text-brand-brown text-xs leading-relaxed flex items-start space-x-2">
            <span className="font-bold text-brand-deep">Notice:</span>
            <span>Preterm development curves catch up gradually, typically settling near the chronologic baseline by 2 to 2.5 years of age. Always check growth values with your pediatrician.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
