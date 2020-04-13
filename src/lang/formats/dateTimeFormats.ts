export const dateTimeFormats = {
	en: {
		short: {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit"
		},
		long: {
			year: "numeric",
			month: "short",
			day: "numeric",
			weekday: "short",
			hour: "numeric",
			minute: "numeric"
		}
	},
	ru: {
		short: {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit"
		},
		long: {
			year: "numeric",
			month: "short",
			day: "numeric",
			weekday: "long",
			hour: "numeric",
			minute: "numeric",
			hour12: true
		}
	},
	ua: {
		short: {
			year: "numeric",
			month: "numeric",
			day: "numeric"
		},
		long: {
			year: "numeric",
			month: "long",
			day: "numeric",
			weekday: "narrow",
			hour: "numeric",
			minute: "numeric"
		}
	}
};
