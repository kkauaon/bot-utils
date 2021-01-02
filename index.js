const m = require('moment');

module.exports = {
	EmbedBuilder: class {
		constructor() {
			this.title = null;
			this.description = null;
			this.fields = [];
			this.author = {
				icon_url: null,
				name: null
			};
			this.timestamp = null;
			this.footer = {
				icon_url: null,
				name: null
			};
			this.thumbnail = {
				url: null
			};
			this.image = {
				url: null
			}
		}

		/**
		 * Check if a String is a ISO Format Date
		 * @param {String} date - A ISO Date
		 */
		isISODate(date) {
			if(m(date, m.ISO_8601, true).isValid()) {
				return true;
			} else {
				return false;
			}
		}

		/**
		 * Sets the title of the embed
		 * @param {String} title - The title of the embed 
		 */
		setTitle(title = null) {
			this.title = title;
			return this;
		}

		/**
		 * Sets the description of the embed
		 * @param {String} desc - The description of the embed 
		 */
		setDescription(desc = null) {
			this.description = desc;
			return this;
		}

		/**
		 * Sets the author of the embed
		 * @param {String} name - The text to show in author
		 * @param {String} icon_url - The image URL to show in author
		 */
		setAuthor(name = null, icon_url = null) {
			this.author = {
				icon_url: icon_url,
				name: name
			}
			return this;
		}

		/**
		 * Sets the footer of the embed
		 * @param {String} name - The text to show in footer
		 * @param {String} icon_url - The image URL to show in footer
		 */
		setFooter(name = null, icon_url = null) {
			this.footer = {
				icon_url: icon_url,
				name: name
			}
			return this;
		}

		/**
		 * Sets the timestamp of the embed
		 * @param {String} time - A ISO Format String
		 */
		setTimestamp(time = new Date().toISOString()) {
			if(this.isISODate(time)) {
				this.timestamp = time;
				return this;
			} else {
				throw new TypeError("Timestamp must be a valid ISO Date");
			}
		}

		/**
		 * Sets the thumbnail of the embed
		 * @param {String} url - A valid image URL
		 */
		setThumbnail(url = null) {
			this.thumbnail.url = url;
			return this;
		}

		/**
		 * Sets the image of the embed
		 * @param {String} url - A valid image URL
		 */
		setImage(url = null) {
			this.image.url = url;
			return this;
		}

		/**
		 * Add a field to the embed
		 * @param {String} name - The name of the new field
		 * @param {String} value - The value of the new field
		 */
		addField(name = null, value = null) {
			if(!name) throw new TypeError("Name is a required argument when adding a field");
			if(!value) throw new TypeError("Value is a required argument when adding a field");
		
			else {
				this.fields.push({
					name: name,
					value: value
				});
				return this;
			}
		}
	}
}