import { LevelDefinition } from '@/types'

export const LEVELS: LevelDefinition[] = [
  { level: 1, title: 'Tidy Apprentice', messagesRequired: 0, icon: '✨' },
  { level: 2, title: 'Dust Buster', messagesRequired: 5, icon: '🧹' },
  { level: 3, title: 'Clean Machine', messagesRequired: 15, icon: '🫧' },
  { level: 4, title: 'Sparkle Specialist', messagesRequired: 30, icon: '💎' },
  { level: 5, title: 'Hygiene Hero', messagesRequired: 50, icon: '🛡️' },
  { level: 6, title: 'Pristine Pro', messagesRequired: 75, icon: '🏆' },
  { level: 7, title: 'Clean Supreme', messagesRequired: 100, icon: '👑' },
]

export const SUGGESTED_PROMPTS = [
  'How do I remove hard water stains?',
  'Best way to clean pet hair from furniture?',
  'Weekly cleaning schedule tips',
  'How to clean stainless steel appliances?',
  'Natural cleaning products I can make at home?',
]

export const TIPS_OF_THE_DAY = [
  'Use microfiber cloths for streak-free glass cleaning.',
  'Clean top to bottom to prevent re-cleaning surfaces.',
  'Vinegar and baking soda can tackle most tough stains.',
  "Empty your vacuum bag when it's 2/3 full for best suction.",
  'Wipe down light switches and door handles weekly - they harbor germs!',
  'Let cleaning products sit for a few minutes before wiping for better results.',
  'Use a squeegee on shower walls after each use to prevent soap scum.',
  'Dust ceiling fans before vacuuming floors.',
  'Put a bowl of baking soda in your fridge to absorb odors.',
  'Clean your washing machine monthly with hot water and vinegar.',
  'Use dryer sheets to dust baseboards - they repel dust!',
  'Microwave a wet sponge for 2 minutes to kill bacteria.',
  'Line your trash can with newspaper to absorb leaks and odors.',
  'Use rubbing alcohol to remove permanent marker from hard surfaces.',
  'Clean your garbage disposal with ice cubes and lemon peels.',
  'Vacuum mattresses every few months to remove dust mites.',
  'Use a lint roller on lampshades to remove dust.',
  'Clean your coffee maker monthly with a vinegar solution.',
  'Sprinkle salt on fresh red wine spills before they set.',
  'Use a toothbrush to clean grout between tiles.',
  'Clean window tracks with a cotton swab dipped in vinegar.',
  'Put a dryer sheet in your luggage to keep clothes fresh.',
  'Use newspaper instead of paper towels for streak-free windows.',
  'Clean your phone screen daily - it has more bacteria than a toilet seat!',
  'Rotate and flip your mattress seasonally for even wear.',
]

export const STORAGE_KEY = 'cleangenius-state'
export const MAX_STORED_MESSAGES = 50
