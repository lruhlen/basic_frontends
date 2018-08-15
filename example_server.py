import hug


api = hug.API(__name__)
api.http.add_middleware(hug.middleware.CORSMiddleware(api, max_age=10))

def cors_support(response, *args, **kwargs):
	response.set_header('Access-Control-Allow-Origin', '*')
	response.set_header('Access-Control-Allow-Methods', 'POST')

@hug.get(requires=cors_support)
def example_get_request():
	return {'message': 'woohoo!'}

@hug.default_input_format("application/json")
@hug.post(requires=cors_support, parse_body=True)
def example_post_request(body=None):
	try:
		if body:
			#print(body)
			return {"body": body}
		else:
			#print("No data?!")
			return {"message": "No data"}
	except:
		raise