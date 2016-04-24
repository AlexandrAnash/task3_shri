Исправление ошибок и запуск приложения.
Что было выполнено:
1.	Без подключения к серверу приложение работает
2.	Обновляется список после добавления нового 
Ошибки были исправлены путем отладки, и руководствуясь статьями/документацией из интернета.
Так же один из способов исправления ошибок и реализации приложения – с использованием событий. 
А именно алгоритм приблизительно таков:
1.	Пользователь практически сразу видит результат кэша.
2.	После того как запрос на сервер пройдет успешно, Service worker выполняет .emit('change-from-server',… )
3.	В это время client подписан на это событие (.on(‘change-from-seriver’, function (data) {… })
4.	И после чего происходит повторное обновление страницы уже с новыми данными.






#Задание

Склонируйте код из репозитория: `git clone https://github.com/shri-msk-2016/task3.git`, перейдите в директорию проекта `cd task3`.

Выполните `npm install`, а затем `npm start` и откройте приложение в браузере (<http://localhost:3000>).

Приложение позволяет добавлять и редактировать данные студентов ШРИ (ФИО, ссылку на фотографию и краткую информацию). Для работы в офлайне оно использует ServiceWorker, позволяя при этом, как минимум, просматривать данные студентов.

Однако при реализации были допущены несколько ошибок:

* Без подключения к серверу приложение не работает.
* Не всегда обновляется список студентов после добавления нового.

Найдите и исправьте ошибки. В качестве дополнительного задания вы можете реализовать добавление студентов в офлайне с последующей синхронизацией. При выполнении обратите внимание на способы определения режима «онлайн/офлайн».

Результат пришлите в виде ссылки на https://github.com

##Что мы проверяем этим заданием?

Мы хотим проверить вашу способность разобраться в незнакомом коде и/или API. Также с помощью этого задания мы оценим ваш навык отладки. Поэтому прокомментируйте, пожалуйста, в коде или текстовом файле README ход ваших мыслей — какие ошибки и как вы нашли, почему они возникли и какие способы исправления существуют. Мы не ограничиваем вас в использовании сторонних инструментов и библиотек, однако при их использовании также ожидаем комментариев, в которых вы расскажете, зачем и почему было использовано то или иное средство.
