(()=>{"use strict";const t=[],e=(e,o,i,a,r)=>{if(t.length>=1e6)alert("Task limit reached: 1 million tasks");else{let d="",l=!0;for(;l;)d=Math.floor(1e6*Math.random()).toString(),l=!1,t.forEach((t=>{t.id===d&&(l=!0)}));const s=(({title:t,project:e,date:o,priority:i,done:a,id:r})=>({title:t,project:e,date:o,priority:i,done:a,id:r}))({title:e,project:o,date:i,priority:a,done:r,id:d});t.push(s)}};e("Task1","default","2021-01-01","1","No"),e("Task2","default","2021-04-02","1","No"),e("Task3","default","2021-02-01","1","No"),e("Task4","default2","2021-01-03","1","No")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBUSxHQWFSQyxFQUFVLENBQUNDLEVBQU9DLEVBQVNDLEVBQU1DLEVBQVVDLEtBQzdDLEdBQUdOLEVBQU1PLFFBQVUsSUFDZkMsTUFBTSwyQ0FFTixDQUNBLElBQUlDLEVBQUssR0FDTEMsR0FBVyxFQUNmLEtBQU1BLEdBQ0ZELEVBQUtFLEtBQUtDLE1BQW9CLElBQWRELEtBQUtFLFVBQWtCQyxXQUN2Q0osR0FBVyxFQUNYVixFQUFNZSxTQUFRQyxJQUNQQSxFQUFLUCxLQUFPQSxJQUNYQyxHQUFXLE1BSXZCLE1BQU1PLEVBMUJLLEdBQUVmLE1BQUFBLEVBQU9DLFFBQUFBLEVBQVNDLEtBQUFBLEVBQU1DLFNBQUFBLEVBQVNDLEtBQUFBLEVBQU1HLEdBQUFBLE1BQU8sQ0FDN0RQLE1BQUFBLEVBQ0FDLFFBQUFBLEVBQ0FDLEtBQUFBLEVBQ0FDLFNBQUFBLEVBQ0FDLEtBQUFBLEVBQ0FHLEdBQUFBLElBb0JvQlMsQ0FBVyxDQUFDaEIsTUFBQUEsRUFBT0MsUUFBQUEsRUFBU0MsS0FBQUEsRUFBTUMsU0FBQUEsRUFBVUMsS0FBQUEsRUFBTUcsR0FBQUEsSUFDbEVULEVBQU1tQixLQUFLRixLQzFCbkJoQixFQUFRLFFBQVMsVUFBVyxhQUFjLElBQUssTUFDL0NBLEVBQVEsUUFBUyxVQUFXLGFBQWMsSUFBSyxNQUMvQ0EsRUFBUSxRQUFTLFVBQVcsYUFBYyxJQUFLLE1BQy9DQSxFQUFRLFFBQVMsV0FBWSxhQUFjLElBQUssTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0YXNrcyA9IFtdOyAvL3Rhc2sgY29udGFpbmVyXG5cbi8vdGFzayBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBjcmVhdGVUYXNrID0gKHt0aXRsZSwgcHJvamVjdCwgZGF0ZSwgcHJpb3JpdHksZG9uZSwgaWR9KSA9Pih7XG4gICAgdGl0bGUsXG4gICAgcHJvamVjdCxcbiAgICBkYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGRvbmUsXG4gICAgaWRcbn0pO1xuXG4vL2FkZCBmdW5jdGlvblxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgcHJvamVjdCwgZGF0ZSwgcHJpb3JpdHksIGRvbmUpID0+IHtcbiAgICBpZih0YXNrcy5sZW5ndGggPj0gMTAwMDAwMCl7XG4gICAgICAgIGFsZXJ0KCdUYXNrIGxpbWl0IHJlYWNoZWQ6IDEgbWlsbGlvbiB0YXNrcycpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsZXQgaWQgPSAnJztcbiAgICAgICAgbGV0IGlkRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUoaWRFeGlzdHMpe1xuICAgICAgICAgICAgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGlkRXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHRhc2suaWQgPT09IGlkKXtcbiAgICAgICAgICAgICAgICAgICAgaWRFeGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHt0aXRsZSwgcHJvamVjdCwgZGF0ZSwgcHJpb3JpdHksIGRvbmUsIGlkfSk7XG4gICAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxufVxuXG4vL3JlbW92ZSBmdW5jdGlvblxuY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgIGxldCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsMSk7XG59XG5cbi8vbWFyayBhcyBkb25lIGZ1bmN0aW9uXG5jb25zdCBtYXJrRG9uZSA9IChpZCkgPT4ge1xuICAgIGxldCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleChlID0+IGUuaWQgPT09IGlkKTtcbiAgICBpZihpbmRleCA+PSAwKXtcbiAgICAgICAgaWYodGFza3NbaW5kZXhdLmRvbmUgPT09ICdObycpe1xuICAgICAgICAgICAgdGFza3NbaW5kZXhdLmRvbmUgPSAnWWVzJztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGFza3NbaW5kZXhdLmRvbmUgPSAnTm8nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL3Rhc2sgZ2V0dGVyXG5jb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCB7YWRkVGFzaywgcmVtb3ZlVGFzaywgbWFya0RvbmUsIGdldFRhc2tzfTsiLCJpbXBvcnQge2FkZFRhc2ssIHJlbW92ZVRhc2ssIG1hcmtEb25lLCBnZXRUYXNrc30gZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQge2FkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5pbXBvcnQge2RlZmF1bHREaXNwbGF5LCB0b2RheURpc3BsYXksIHByb2plY3REaXNwbGF5LCB3ZWVrRGlzcGxheX0gZnJvbSAnLi9kaXNwbGF5LmpzJztcblxuYWRkVGFzaygnVGFzazEnLCAnZGVmYXVsdCcsICcyMDIxLTAxLTAxJywgJzEnLCAnTm8nKTtcbmFkZFRhc2soJ1Rhc2syJywgJ2RlZmF1bHQnLCAnMjAyMS0wNC0wMicsICcxJywgJ05vJyk7XG5hZGRUYXNrKCdUYXNrMycsICdkZWZhdWx0JywgJzIwMjEtMDItMDEnLCAnMScsICdObycpO1xuYWRkVGFzaygnVGFzazQnLCAnZGVmYXVsdDInLCAnMjAyMS0wMS0wMycsICcxJywgJ05vJyk7XG4iXSwibmFtZXMiOlsidGFza3MiLCJhZGRUYXNrIiwidGl0bGUiLCJwcm9qZWN0IiwiZGF0ZSIsInByaW9yaXR5IiwiZG9uZSIsImxlbmd0aCIsImFsZXJ0IiwiaWQiLCJpZEV4aXN0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiZm9yRWFjaCIsInRhc2siLCJuZXdUYXNrIiwiY3JlYXRlVGFzayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9