function deleteProduct(id) {
  const result = confirm(
    'Are you sure you want to delete this Job posting ?'
  );
  if (result) {
    fetch(`/deleteJob/${id}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) {
        window.location.href = '/jobs';
      }
    });
  }
}