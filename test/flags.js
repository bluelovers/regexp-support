"use strict";
/**
 * Created by user on 2018/4/26/026.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const index_1 = require("../lib/util/index");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const sort_object_keys2_1 = require("sort-object-keys2");
index_1.log_dir(__1.default);
let versions = sort_object_keys2_1.sortObjectKeys(process.versions, {
    keys: ['node'],
});
index_1.log_dir(versions);
let version = versions.node.split('.').map(v => v.padStart(2, '0')).join('.');
fs_extra_1.outputJSON(path_1.join(__dirname, 'log', 'v' + version + '.json'), {
    versions,
    support: __1.default,
}, {
    spaces: 2
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsMEJBQXlCO0FBQ3pCLDZDQUE0QztBQUM1Qyx1Q0FBa0Q7QUFFbEQsK0JBQTRCO0FBQzVCLHlEQUFtRDtBQUVuRCxlQUFPLENBQUMsV0FBTyxDQUFDLENBQUM7QUFFakIsSUFBSSxRQUFRLEdBQUcsa0NBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0lBQy9DLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztDQUNkLENBQUMsQ0FBQztBQUVILGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVsQixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU5RSxxQkFBVSxDQUFDLFdBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFFLEVBQUU7SUFDNUQsUUFBUTtJQUNSLE9BQU8sRUFBUCxXQUFPO0NBQ1AsRUFBRTtJQUNGLE1BQU0sRUFBRSxDQUFDO0NBQ1QsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOC80LzI2LzAyNi5cbiAqL1xuXG5pbXBvcnQgc3VwcG9ydCBmcm9tICcuLic7XG5pbXBvcnQgeyBsb2dfZGlyIH0gZnJvbSAnLi4vbGliL3V0aWwvaW5kZXgnO1xuaW1wb3J0IHsgb3V0cHV0RmlsZSwgb3V0cHV0SlNPTiB9IGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IHNvcnRPYmplY3RLZXlzIH0gZnJvbSAnc29ydC1vYmplY3Qta2V5czInO1xuXG5sb2dfZGlyKHN1cHBvcnQpO1xuXG5sZXQgdmVyc2lvbnMgPSBzb3J0T2JqZWN0S2V5cyhwcm9jZXNzLnZlcnNpb25zLCB7XG5cdGtleXM6IFsnbm9kZSddLFxufSk7XG5cbmxvZ19kaXIodmVyc2lvbnMpO1xuXG5sZXQgdmVyc2lvbiA9IHZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKS5tYXAodiA9PiB2LnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJy4nKTtcblxub3V0cHV0SlNPTihqb2luKF9fZGlybmFtZSwgJ2xvZycsICd2JyArIHZlcnNpb24gKyAnLmpzb24nICksIHtcblx0dmVyc2lvbnMsXG5cdHN1cHBvcnQsXG59LCB7XG5cdHNwYWNlczogMlxufSk7XG5cbiJdfQ==