const firestore = admin.firestore;

exports.activityLog = functions.firestore
  .document('privacy/{uid}').onWrite(snap => {
     const uid = context.params.uid;
     const settings = snap.data();
     
     settings["udpate_time"] = admin.firestore.FieldValue.serverTimestamp();
  
     firestore.collection(`activity_log/${uid}/entries`).add(settings);
});
