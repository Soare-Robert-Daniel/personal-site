export type PhaseAction = 'in' | 'hold' | 'out';

export type Phase = {
	label: string;
	duration: number;
	action: PhaseAction;
};

export type Technique = {
	id: string;
	name: string;
	group: string;
	tagline: string;
	phases: Phase[];
	instructions: string[];
	evidence: string;
	source: string;
	safety: string;
};

export const ACTION_COLORS: Record<PhaseAction, string> = {
	in: '#00f0ff',
	hold: '#f0a000',
	out: '#00c0a0',
};

export const ACTION_SHORT: Record<PhaseAction, string> = {
	in: 'In',
	hold: 'Hold',
	out: 'Out',
};

export const GROUP_ORDER = ['start', 'stress', 'sleep', 'focus', 'gentle'] as const;

export const GROUP_LABELS: Record<string, string> = {
	start: 'Start here',
	stress: 'Stress relief',
	sleep: 'Sleep',
	focus: 'Focus',
	gentle: 'Gentle / balance',
};

export const TECHNIQUES: Technique[] = [
	{
		id: 'diaphragmatic',
		name: 'Belly Breathing',
		group: 'start',
		tagline: 'The foundation — breathe low and slow into your belly.',
		phases: [
			{ label: 'Breathe in', duration: 4, action: 'in' },
			{ label: 'Breathe out', duration: 6, action: 'out' },
		],
		instructions: [
			'Sit comfortably or lie down. Rest one hand on your chest and one on your belly.',
			'Breathe in slowly through your nose so your belly rises — keep your chest still.',
			'Breathe out gently through pursed lips and feel your belly fall.',
		],
		evidence: 'Recommended by Cleveland Clinic and Harvard Health as the first breathing exercise to learn for everyday calm.',
		source: 'Cleveland Clinic, Harvard Health',
		safety: 'Gentle and safe for most people. Keep your breaths soft and never strain.',
	},
	{
		id: 'cyclic-sighing',
		name: 'Cyclic Sighing',
		group: 'stress',
		tagline: 'Two inhales and one long exhale — the fastest mood lift.',
		phases: [
			{ label: 'Breathe in', duration: 3, action: 'in' },
			{ label: 'Top-up breath', duration: 1, action: 'in' },
			{ label: 'Long breathe out', duration: 6, action: 'out' },
		],
		instructions: [
			'Breathe in through your nose to fill most of your lungs.',
			'Take a second short sip of air on top to fill them completely.',
			'Let a long, slow breath out through your mouth until your lungs feel empty.',
		],
		evidence: 'In a 2023 Stanford study, five minutes a day of cyclic sighing improved mood more than meditation. Even 1–3 breaths can ease a stressful moment.',
		source: 'Stanford Medicine, Cell Reports Medicine (2023)',
		safety: 'Keep the top-up breath small and relaxed. Stop if you feel light-headed.',
	},
	{
		id: 'tactical',
		name: 'Tactical Breathing',
		group: 'stress',
		tagline: 'A simple in-and-out count to calm down fast.',
		phases: [
			{ label: 'Breathe in', duration: 4, action: 'in' },
			{ label: 'Breathe out', duration: 4, action: 'out' },
		],
		instructions: [
			'Breathe in slowly through your nose for a count of four.',
			'Breathe out slowly through your nose for a count of four.',
			'Keep the rhythm even and let your shoulders relax.',
		],
		evidence: 'Taught to military and police because the plain in-and-out count is easy to follow when you are too stressed to think.',
		source: 'Lt. Col. Dave Grossman, On Combat',
		safety: 'No breath holds, so it suits most people. Slow down if you feel rushed.',
	},
	{
		id: '478',
		name: '4-7-8 Breath',
		group: 'sleep',
		tagline: 'A long exhale to help you wind down for sleep.',
		phases: [
			{ label: 'Breathe in', duration: 4, action: 'in' },
			{ label: 'Hold gently', duration: 7, action: 'hold' },
			{ label: 'Breathe out', duration: 8, action: 'out' },
		],
		instructions: [
			'Breathe in quietly through your nose for a count of four.',
			'Hold your breath gently for a count of seven.',
			'Breathe out fully through your mouth for a count of eight. Repeat up to four times.',
		],
		evidence: 'Developed by Dr. Andrew Weil; Cleveland Clinic suggests it before bed to relax and fall asleep more easily.',
		source: 'Cleveland Clinic, Dr. Andrew Weil',
		safety: 'The 7-second hold can feel long — shorten it if needed and avoid straining.',
	},
	{
		id: 'box',
		name: 'Box Breathing',
		group: 'focus',
		tagline: 'Equal counts in a square to steady your focus.',
		phases: [
			{ label: 'Breathe in', duration: 4, action: 'in' },
			{ label: 'Hold gently', duration: 4, action: 'hold' },
			{ label: 'Breathe out', duration: 4, action: 'out' },
			{ label: 'Hold gently', duration: 4, action: 'hold' },
		],
		instructions: [
			'Breathe in through your nose for a count of four.',
			'Hold your breath gently for a count of four.',
			'Breathe out for a count of four, then hold empty for four. Repeat.',
		],
		evidence: 'Used by the US Navy SEALs and first responders; the even 4-4-4-4 count helps steady focus under pressure.',
		source: 'WebMD, Verywell Health, Cleveland Clinic',
		safety: 'If the holds feel uncomfortable, shorten them or try Tactical Breathing instead.',
	},
	{
		id: 'coherent',
		name: 'Coherent Breathing',
		group: 'gentle',
		tagline: 'Slow, even breaths at about five per minute.',
		phases: [
			{ label: 'Breathe in', duration: 5, action: 'in' },
			{ label: 'Breathe out', duration: 5, action: 'out' },
		],
		instructions: [
			'Breathe in smoothly through your nose for a count of five.',
			'Breathe out smoothly for a count of five.',
			'Keep it gentle and continuous — about six breaths a minute.',
		],
		evidence: 'Breathing about five times a minute lines up with your heart’s natural rhythm and raises heart-rate variability, a marker of calm.',
		source: 'Resonance / HRV breathing research',
		safety: 'Very gentle. A good everyday option for general balance.',
	},
	{
		id: 'buteyko',
		name: 'Buteyko Breathing',
		group: 'gentle',
		tagline: 'Lighter nasal breathing with a comfortable pause.',
		phases: [
			{ label: 'Small breath in', duration: 2, action: 'in' },
			{ label: 'Easy breath out', duration: 3, action: 'out' },
			{ label: 'Comfortable pause', duration: 4, action: 'hold' },
		],
		instructions: [
			'Breathe in gently and quietly through your nose — smaller than usual.',
			'Let an easy, relaxed breath out through your nose.',
			'Pause comfortably until you feel a mild urge to breathe, then start again.',
		],
		evidence: 'Developed by Dr. Konstantin Buteyko; lighter nasal breathing has its strongest evidence as a support for asthma symptoms (Cochrane review).',
		source: 'Cochrane review (asthma), Buteyko method',
		safety: 'Keep the pause comfortable, never forced. If you have asthma or a lung condition, check with your clinician first.',
	},
];
