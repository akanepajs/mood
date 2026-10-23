window.MOOD_QUESTIONS =
{
  "version": 1,
  "periods": {
    "daily": {
      "label": "Daily check-in",
      "questions": [
        {"id": "day", "label": "Day /10", "type": "number", "min": 0, "max": 10, "step": 0.25, "help": "Overall rating of the day"},
        {"id": "pct_bad", "label": "How the day was split", "short": "% of day bad", "type": "number", "min": 0, "max": 100, "step": 5, "widget": "split", "split_with": "pct_good", "help": "Drag the two handles: left of the first is the share of the day that felt bad, right of the second felt good, between them neutral"},
        {"id": "pct_good", "label": "% of day good", "type": "number", "min": 0, "max": 100, "step": 5, "widget": "split_partner"},
        {"id": "sleep", "label": "Sleep /10", "type": "number", "min": 0, "max": 10, "step": 0.25},
        {"id": "work_h", "label": "Work (h)", "type": "number", "min": 0, "max": 16, "step": 0.5},
        {"id": "exercise_h", "label": "Exercise (h)", "type": "number", "min": 0, "max": 8, "step": 0.25},
        {"id": "backpain", "label": "Back pain /1", "type": "number", "min": 0, "max": 1, "step": 0.05, "help": "0 = none, 1 = worst imaginable"},
        {"id": "patterns", "label": "Patterns / notes", "type": "text"},
        {"id": "insights", "label": "Insights", "type": "text"},
        {"id": "negative", "label": "Negative experiences", "type": "text"},
        {"id": "improvements", "label": "Improvements to make", "type": "text"},
        {"id": "events", "label": "Notable events / achievements", "type": "text"},
        {"id": "gratitude", "label": "Gratitude", "type": "text"},
        {"id": "predictions", "label": "Predictions", "type": "text", "help": "For example: tomorrow will be a 7 or better"},
        {"id": "results", "label": "Results of earlier predictions", "type": "text"}
      ]
    },
    "weekly": {
      "label": "Weekly review",
      "questions": [
        {"id": "week", "label": "Week /10", "type": "number", "min": 0, "max": 10, "step": 0.25},
        {"id": "matters", "label": "What matters this week?", "type": "text"},
        {"id": "neglected", "label": "What did I neglect last week?", "type": "text"},
        {"id": "schedule", "label": "What should I schedule now?", "type": "text"},
        {"id": "remove", "label": "What should I remove from my task list?", "type": "text"},
        {"id": "goals", "label": "Progress on longer-term goals", "type": "text"}
      ]
    },
    "monthly": {
      "label": "Monthly reflection",
      "questions": [
        {"id": "month", "label": "Month /10", "type": "number", "min": 0, "max": 10, "step": 0.25},
        {"id": "well", "label": "What is going well?", "type": "text"},
        {"id": "not_well", "label": "What is not going well?", "type": "text"},
        {"id": "avoiding", "label": "What am I avoiding?", "type": "text"},
        {"id": "stop", "label": "What should I stop doing?", "type": "text"},
        {"id": "focus", "label": "What should I focus on next month?", "type": "text"},
        {"id": "connected", "label": "Are my current tasks still connected to my actual goals?", "type": "text"}
      ]
    },
    "yearly": {
      "label": "Annual review",
      "questions": [
        {"id": "overall", "label": "Overall year /7", "type": "number", "min": 1, "max": 7, "step": 0.5},
        {"id": "life_sat", "label": "Life satisfaction /10", "type": "number", "min": 0, "max": 10, "step": 0.5},
        {"id": "changes", "label": "What are the most significant things that changed this year?", "type": "text"},
        {"id": "went_well", "label": "What went well?", "type": "text"},
        {"id": "not_well", "label": "What did not go well?", "type": "text"},
        {"id": "lessons", "label": "What were the most important lessons I learned?", "type": "text"},
        {"id": "problem", "label": "What is the most important problem I have?", "type": "text"},
        {"id": "biggest_lever", "label": "What single thing, if done, would have the biggest positive impact on my life next year?", "type": "text"},
        {"id": "last_goals", "label": "How did last year's goals go?", "type": "text"},
        {"id": "goals", "label": "What goals should I set?", "type": "text"}
      ]
    }
  }
}
;
