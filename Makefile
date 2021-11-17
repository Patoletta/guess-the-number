sonar:
	docker run --rm -e SONAR_HOST_URL="http://192.168.1.101:9000" -e SONAR_LOGIN="ff28a68c4065a4a5db35903e5c785f105ce14768" \
	-v "/Users/vittoriacoltellacci/SVILUPPO/react/guess-the-number:/usr/src" sonarsource/sonar-scanner-cli:4.6