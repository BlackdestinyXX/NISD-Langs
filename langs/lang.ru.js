/*
    File della lingua del BOT NISD,
    @Authors: @Polliog#7772 | 𝓝𝓪𝓴𝓪𝓶𝓸𝓽𝓸 𝓢𝓱𝓲𝓰𝓮𝓽𝓸𝓴𝓲#0016
    @Translated by: @El Nobil Chapo Bonanz#3985

    Note per tradurre questo file:
    - Non modificare il nome dei metodi, delle variabili, delle funzioni
    - Non modificare gli autori
    - Tradurre totalmente il file (anche le annotazioni)
 */


const lang = {
    lang: "ru", // Lang del file -> tradotto "ру"
    //PAROLE GENERALI DEL BOT: Tradurle seguendo anche le maiuscole
    maintenance: "Поддержка",
    message: "Сообщение",
    messages: "Сообщения",
    examples: "Примеры",
    site: "Сайт",
    support_discord: "Сервер поддержки",
    aliases: "Клички",
    changes_saved: 'Изменения Сохранены',
    cmd_done: "Команда Выполнена",
    author: "Автор",
    reason: "Причина",
    reason_not_provided: "Причина не предоставлена",
    user: "Пользователь",
    users: "Пользователи",
    page: "Страница",
    moderation: "Модерация",
    settings: "Настройки",
    utility: "Полезность",
    active: "Действующий",
    not_active: "Недействующий",
    report: "Отчет",
    nothing: "Ничего",
    action: "Действие",
    limit: "Ограничение",
    time: "Время",
    changes: "Changes",
    actions: "Действия",
    measure: "Мера",
    actual_mode: "Действующий режим",
    mode: "Режим",
    role: "Роль",
    title: "Титул",
    position: "Position",
    channel: "Channel",
    type: "Type",
    allowed: "Allowed",
    color: "Color",
    hoist: "Hoist",
    pexs: "Permissions",
    content: "Content",
    integration: "Integration",
    old: "Old",
    new: "New",
    description: "Description",
    invite: "Invite",
    previous_channel: "Previous channel",
    not_allowed: "Not Allowed",
    embed_message: "Встроенное сообщение",
    external_message: "Внешнее сообщение",
    category: "Категория",
    support_role: "Роль поддержки",
    joined_at: "Joined at",
    created_at: "Created at",
    server_deaf: "Deaf",
    server_mute: "Mute",
    //Azioni utili per il bot tradurre seguendo le maiuscole
    to_add: "Добавить",
    to_remove: "Удалить",
    // Interaction Replies
    interaction_success: "Action completed",
    //ERRORI del bot tradurre come meglio si crede
    bot_error: "Произошел внутренний сбой, данные об ошибке автоматически будут оправлены разработчикам",
    error: "Ошибка",
    insufficient_permissions: "Недостаточный доступ",
    invalid_user: "Пользователь неверный!",
    invalid_member: "Участник неверный!",
    invalid_role: "Роль неверная!",
    invalid_channel: "Канал неверный!",
    invalid_permission: "Неверный доступ:",
    no_basic_permissions: "Программе не хватает базовых разрешений, таких как отправка встроенных ссылок и отправка сообщений",
    no_user_permission: "Необходимо иметь доступ, чтобы использовать команду:",
    owner_restriction: "Только владелец сервера может воспользоваться данной командой",
    owner_restriction_plus: "Только владелец сервера или тот, у кого есть роль `manager` может выполнить эту команду",
    command_not_found: "Команда не найдена",
    user_not_found: "User not found",
    /*
        time_left: timestamp unix
        cmd: comando
     */
    cmd_cooldown: (time_left, cmd) => {
        return `Вы сможете повторно использовать эту команду через \`${cmd}\` <t:${time_left}:R>` // utilizzare <t:> per il tempo (discord timestamp)
    },
    already_banned: "Пользователь уже заблокирован",
    actual_channel: "Действительный канал",
    not_banned: "Пользователь не заблокирован",
    cant_ban: "Данного пользователя нельзя заблокировать",
    cant_kick: "Данного пользователя нельзя исключить",
    user_rank_equal: "Выбранный пользователь имеет степень выше или равную вашей",
    invalid_mute_role: "Выбранная роль `mute` не верна или не существует, пожалуйста, переустановите ее через `setmuterole [@Ruolo/ID]`",
    member_not_manageable: "Бот не может выполнять никаких действий с этим пользователем",
    warn_not_exists: "Предупреждение не существует",
    no_warns: "У пользователя нет предупреждений",
    bad_syntax: "Неверный синтаксис команды, проверьте правильное использование кавычек и т.д.",
    message_too_long: "Длина сообщения превышает 256 символов",
    maximum_ticket_panels_reached: "Вы достигли предела доступных панелей",
    tickets_channel_error_user: "В настоящее время билет не может быть создан",
    tickets_channel_error_logs: "Билет не может быть открыт из-за недостатка разрешений",
    tickets_channel_closed_logs: "Произошла ошибка при закрытии билета",
    /*
        time: timestamp unix
     */
    ticketsInt_rateLimit: (time) => `Вы сможете повторить это действие через: \<t:${time}:R\>`,
    ticketsInt_alreadyClosed: "Билет уже закрыт.",
    ticketsInt_transcriptAlreadySent: "Сохранение билета уже запрашивалось.",
    //HELP (comando)
    not_in_dm: "Недоступно в личных сообщениях",
    i_cant_write_you: "Не могу написать вам в личных сообщениях, откройте их или добавьте `-h` в конце команды.",
    help_sent: "Отправил вам инструкции в личные сообщения",
    help_title: "Команды NISD",
    help_description: "Для управления определенным разделом или командой используйте `help [Раздел/Команда]`.\n" +
        "Если вы хотите, чтобы эта команда отображалась в чате, а не в личных сообщениях, добавьте `-h` в конце команды. Затем `help -h` или `help moderation -h`",
    arguments_legend: "**Значения параметров**:\n" +
        "`[]` - Означает, что данный параметр является обязательным.\n" +
        "`()` - Означает, что данный параметр является дополнительным.\n" +
        "`{}` - Условный аргумент, требуется только в некоторых случаях.\n" +
        "`1 | 2 | 3` - Выберете из предложенных вариантов.\n" +
        "`[@Пользователь/ID]` Параметром может быть как тег, так и айди пользователя.\n" +
        "**Не используйте символы {}, [], () и смайлики в команде**",
    cmd_utilize: "Использование команд",
    not_configured: "`Не настроено`",
    actual_role: "Действующая роль",
    time_format: "Форматирование времени",
    moderation_description: "*Обеспечение безопасности сервера и контроль происходящего*",
    automoderation_description: "*Автоматическое обеспечение безопасности сервера*",
    automation_description: "*Автоматизация функций бота*",
    settings_description: "*Настройки NISD с помощью команд*",
    utility_description: "*Прочие полезные команды*",
    info_description: "*Получить информацию о боте, пользователях, серверах и т.д.*",
    //TIMES,
    year: "Год",
    years: "Годы",
    month: "Месяц",
    months: "Месяцы",
    day: "День",
    days: "Дни",
    hour: "Час",
    hours: "Часы",
    minute: "Минута",
    minutes: "Минуты",
    second: "Секунда",
    seconds: "Секунды",
    duration: "Продолжительность",
    //AVATAR
    avatar_use: "avatar (@Пользователь/ID)",
    avatar_description: "Показать аватарку выбранного пользователя или бота",
    avatar_small_desc: "Показать аватарку выбранного пользователя или бота",
    avatar_examples: "`avatar @Polliog`\n `avatar ID`",
    required_by: (user) => {
        return `Запрошено ${user.username}#${user.discriminator}`
    },
    avatar_of: (user) => {
        return `Аватарка ${user.username}#${user.discriminator}`
    },
    //USERINFO
    userinfo_use: "user (@Пользователь/ID)",
    userinfo_description: "Показать информацию о пользователе",
    userinfo_small_desc: "Показать информацию о пользователе",
    userinfo_examples: "`user ID`\n`user @Polliog`",
    info_of: (member) => {
        return `Информация о ${member.user.username} | ${member.user.id}`
    },
    name: "Имя",
    mention: "Упоминание",
    status: "Статус",
    created: "Создан аккаунт",
    entered: "Зашел на сервер",
    yes: "Да",
    no: "Нет",
    roles: "Роли",
    no_role: "Без роли",
    //SERVERINFO
    icon: "Икона",
    region: "Область",
    categories: "Категории",
    text_channels: "Текстовые Каналы",
    voice_channels: "Голосовые Каналы",
    members: "Участники",
    channels: "Каналы",
    server_use: "сервер",
    server_description: "Показать информацию о сервере",
    server_small_desc: "Показать информацию о сервере",
    //SAY
    say_use: "say [Сообщение]",
    say_description: "Попросите бот повторить сообщение",
    say_examples: "`say привет мир`",
    //BUG
    bug_sent: "Отчет об ошибке отправлен!",
    bug_use: "bug [Сообщение]",
    bug_description: "Сообщает об ошибке нашей службе поддержки (минимум 50 символов)\n" +
        "Включите в отчет как можно больше деталей и подробностей.\n\n" +
        ":warning: **Внимание** любое злоупотребление этим повлечет за собой последствия!",
    bug_small_desc: 'Сообщает об ошибке в нашу службу поддержки',
    bug_examples: "`bug Команда предупреждение дает мне эту ошибку...`",
    bug_min_chars: "Сообщение должно содержать не менее 50 символов.",
    //INVITE
    invite_content: "Спасибо за интерес к боту",
    invite_me: "Пригласите меня",
    //MANAGER
    manager_use: "manager [@Ruolo/ID/None]",
    manager_description: "Установить роль, позволяющую поменять настройки, зарезервированные только для владельца сервера, используйте `none` для удаления данной роли.\n" +
        "Роль `manager` по умолчанию выше программ AntiNuke" +
        "\n\n :warning: **Осторожно используйте эту команду, персонал бота не несет ответственности за любые повреждения сервера**",
    manager_small_desc: "Установить роль, позволяющую изменять настройки, зарезервированные только для владельца",
    manager_examples: "`manager @Админ `\n" +
        "`manager 589443292673081385`\n" +
        "`manager none`",
    manager_saved: (role) => {
        return `Роль \`Manager\` присвоена. **Новая роль**: ${role}`
    },
    manager_removed: "Роль \`Manager\` удалена",
    //CLEAR
    clear_use: "clear [Число]",
    clear_description: "Удаляет количество сообщений в канале. **[Max. 1000]**",
    clear_small_desc: "Удаляет количество сообщений в канале",
    clear_examples: "`clear 1000`",
    max_messages: "Вы можете удалить максимум 100 сообщений за раз",
    clear_done: (number) => {
        return `<a:accettato_gif:742023278071119913> Были удалены \`${number}\` сообщения`
    },
    //BAN
    ban_use: "ban [@Пользователь/ID] (время) (причина) (-c)",
    ban_description: "Блокирует пользователя на сервере навсегда или на определенное время, добавить `-c` к команде, чтобы одновременно удалить сообщения пользователя" +
        " отправленные за последнии 7 дней. При временной блокировке пользователя используйте данный формат `3h 16m 8s` для указания времени 3 часа, 16 минут и 8 секунд" +
        "\n Данная команда работает и для пользователей, не присутствующих на сервере",
    ban_small_desc: "Заблокирует пользователя на сервере, указание времени произвольно",
    ban_examples: "`ban @Пользователь`\n" +
        "`ban ID flood -c`\n" +
        "`ban @Пользователь 1d раздражает`\n",
    user_banned: "Заблокированный пользователь",
    user_banned_dm: (guild) => {
        return `Вы были заблокированы ${guild.name}`
    },
    ban_timeout: "Время блокировки истекло",
    ban_timeout_dm: (guild) => {
        return `Ваша блокировка от ${guild.name} закончена, вы можете опять войти на сервер`
    },
    //unban
    unban_use: "unban [@Пользователь/ID] (причина)",
    unban_small_desc: "Отменяет блокировку пользователя на сервере",
    unban_description: "Отменяет блокировку пользователя на сервере, чтобы он смог снова войти в систему",
    unban_examples: "`unban @Пользователь`" +
        "\n`unban ID упс не тот пользователь`",
    user_unbanned: "Разблокированный пользователь",
    user_unbanned_dm: (guild) => {
        return `Вы были заблокированы ${guild.name}`
    },
    //kick
    kick_use: "kick [@Пользователь/ID] (причина) (-c)",
    kick_description: "Удаляет пользователя с сервера, добавить `-c` для удаления сообщений, отпрвленных пользователем за последнии 7 дней",
    kick_small_desc: "Удаляет пользователя с сервера",
    kick_examples: "`kick ID`" +
        "\n`kick @Пользователь -c`" +
        "\n`kick @Пользователь раздражает в голосовой связи`" +
        "\n`kick @Пользователь постоянный спам в основном чате -c`",
    user_kicked: "Пользователь удален",
    user_kicked_dm: (guild) => {
        return `Вас удалил ${guild.name}`
    },
    //mute
    mute_use: "mute [@Пользователь/ID] (время) (причина)",
    mute_description: "Отключает пользователю текстовые каналы, чтобы он больше не мог общаться. " +
        "Если вы хотите временно отключить пользователя, используйте данный формат `3h 16m 8s` для указания времени 3 часа, 16 минут и 8 секунд. " +
        "Пользователь останется в данном режиме даже при выходе и повторном входе на сервер.\n" +
        "**Обратите внимание, что на серверах, где настройки базовых ролей были персонализированы, данная команда может не работать из-за блокировки разрешений**",
    mute_small_desc: "Отключает пользователю текстовые каналы, указание времени произвольно",
    mute_examples:
        "`mute ID`\n" +
        "`mute @Пользователь`\n" +
        "`mute @Пользователь 15m хватит спама`\n" +
        "`mute @Пользователь постоянно раздражает в голосовой связи `",
    user_muted: "Пользователь отключен",
    user_muted_dm: (guild) => {
        return `Вас отключил ${guild.name}`
    },
    mute_timeout: "Срок действия отключения истек",
    mute_timeout_dm: (guild) => {
        return `Ваше отлючение от ${guild.name} закончено, вы опять можете общаться на сервере`
    },
    //unmute
    unmute_use: "unmute [@Пользователь/ID] (причина)",
    unmute_description: "Подключить пользователю текстовые каналы,чтобы он снова мог общаться на сервере",
    unmute_small_desc: "Подключить пользователя",
    unmute_examples:
        "`unmute ID`\n" +
        "`unmute @Пользователь`\n" +
        "`unmute @Пользователь отключено по ошибке, извините <3`",
    user_unmuted: "Пользователь подключен",
    user_unmuted_dm: (guild) => {
        return `Вас подключил ${guild.name}`
    },
    //muterole
    muterole_use: "muterole [@Роль**/ID] (-n)",
    muterole_description: "Присваивает роль для использования с командой `mute`" +
        "\n\n **:предупреждение: При использовании данной команды бот попытается установить данную роль во всех каналах сервера, чтобы этого избежать, добавьте `-n` к команде**",
    muterole_small_desc: "Присваивает роль для команды `mute`",
    muterole_examples:
        "`muterole ID`\n" +
        "`muterole @Роль`\n" +
        "`muterole @Роль -n`",
    muterole_saved: (role) => {
        return `Роль \`mute\` присвоена. **Новая роль**: ${role}`
    },
    //warn
    warn_use: "warn [@Пользователь/ID] (причина)",
    warn_description: "Предупреждает пользователя",
    warn_small_desc: "Предупреждает пользователя",
    warn_examples:
        "`warn ID`\n" +
        "`warn @Пользователь прекратите спам`",
    user_warned: "Пользователь Предупрежден",
    user_warned_dm: (guild) => {
        return `Вас предупредил ${guild.name}`
    },
    //unwarn
    unwarn_use: "unwarn [@Пользователь/ID] [Номер] (Причина)",
    unwarn_description: "Удаляет предупреждение у пользователя, чтобы найти номер предупреждения, используйте `warnings [@Пользователь]`",
    unwarn_small_desc: "Удаляет предупреждение у пользователя",
    unwarn_examples:
        "`unwarn ID`\n" +
        "`unwarn @Пользователь`\n" +
        "`unwarn @Пользователь я тебя прощаю, братан`",
    user_unwarned: "Предупреждение удалено",
    user_unwarned_dm: (guild) => {
        return `Предупреждение удалено ${guild.name}`
    },
    //clearwarn
    clearwarns_use: "clearwarn [@Пользователь/ID] (Причина)",
    clearwarns_description: "Удаляет все предупреждения у пользователя",
    clearwarns_small_desc: "удаляет все предупреждения у пользователя",
    clearwarns_examples:
        "`clearwarns ID`\n" +
        "`clearwarns @Пользователь`\n" +
        "`clearwarns @Пользователь вам все простили`",
    user_clearwarns: "Все ваши предупреждения полностью удалены",
    user_clearwarns_dm: (guild) => {
        return `Все предупреждения полностью удалены ${guild.name}`
    },
    //warnings
    warnings_use: "warnings [@Пользователь/ID] (страница)",
    warnings_description: "Просмотр предупреждений у определенного пользователя",
    warnings_small_desc: "Просмотр предупреждений у определенного пользователя",
    warnings_examples:
        "`warnings ID`\n" +
        "`warnings ID 2`\n" +
        "`warnings @Polliog`\n" +
        "`warnings @Polliog 2`",
    warns_of: (user) => {
        return `Предупреждения у ${user.username}#${user.discriminator}`
    },
    //reportchannel
    reportchannel_use: "reportchannel [#Канал/ID]",
    reportchannel_description: "Настойка канала для отчетов пользователей",
    reportchannel_small_desc: "Настройка канала для отчета пользователей",
    reportchannel_examples:
        "`reportchannel ID`\n" +
        "`reportchannel #Канал`",
    reportchannel_saved: (channel) => {
        return `Канал для отчетов установлен, **Новый канал**:${channel}`
    },
    //prefix
    my_prefix: (prefix) => {
        return `Мой префикс на этом сервере \`${prefix}\``
    },
    prefix_use: "prefix [Prefix]",
    prefix_description: "Устанавливает персонализированный префикс для сервера, Бот ответит на новый префикс и на префикс `nisd`. \n" +
        "**Вы сможете также прикрепить ярлык боту, чтобы увидеть префикс на этом сервере**",
    prefix_small_desc: "Меняет префикс у бота",
    prefix_examples:
        "`prefix ?`\n" +
        "`prefix n!!`",
    prefix_changed: (prefix) => {
        return `Префикс бота изменен, **Новый префикс**: \`${prefix}\``
    },
    //mod
    mod_logs: "Регистры Модерации",
    mod_deleteAfter: "Удалить команду",
    mod_dmUser: "Отправить сообщение пользователю",
    mod_use: "mod logs | dms | delete {#Канал/ID/none} {True/False}",
    mod_description:
        "**Меняет настройки модерации**\n" +
        ":small_blue_diamond: `mod logs [#Канал/ID/none]`\n" +
        "Настраивает канал, чтобы показать действия персонала\n" +
        ":small_blue_diamond: `mod dms [True/False]`\n" +
        "Устанавливает, следует ли отправлять личное сообщение пользователю после выполнения действия\n" +
        ":small_blue_diamond: `mod delete [True/False]`\n" +
        "Устанавливает, следует ли автоматически удалять команду после выполнения действия",
    mod_small_desc: "Откройте настройки модерации, используйте `mod` для получения информации",
    mod_examples:
        "`mod dms true` \n" +
        "`mod logs none`\n" +
        "`mod logs #Канал`\n" +
        "`mod delete true`",
    //modlogs
    mod_logs_use: "mod logs [#Канал/ID/none]",
    mod_logs_description: "Настройка канала для показа действий персонала\n" +
        "Используйте `none` вместо канала, чтобы отключить регистры",
    mod_logs_small_desc: "Настройка канала для показа действий персонала",
    mod_logs_examples:
        "`mod logs ID`\n" +
        "`mod logs none`\n" +
        "`mod logs #Канал`",
    mod_logs_channel_saved: (channel) => {
        return `Обновлен канал регистров модерации, **Новый канал**: ${channel}`
    },
    mod_logs_disabled: "Регистры модерации отключены!",
    //mod dms
    mod_dms_use: "mod dms [True/False]",
    mod_dms_description: "Устанавливает, следует ли отправлять личное сообщение пользователю после выполнения действия",
    mod_dms_small_desc: "Устанавливает, следует ли отправлять личное сообщение пользователю после выполнения действия",
    mod_dms_examples:
        "`mod dms true`\n" +
        "`mod dms false`",
    mod_dms_true: "Теперь пользователи будут уведомлены личным сообщением",
    mod_dms_false: "Теперь пользователи больше не будут получать уведомлений в личных сообщениях",
    //mod delete
    mod_delete_use: "mod delete [True/False]",
    mod_delete_description: "Устанавливает, следует ли автоматически удалить команду после выполнения действия",
    mod_delete_small_desc: "Устанавливает, следует ли автоматически удалить команду после выполнения действия",
    mod_delete_examples:
        "`mod delete true`\n" +
        "`mod delete false`",
    mod_delete_true: "Теперь команды будут удаляться после завершения действия",
    mod_delete_false: "Теперь команды не будут удаляться после завершения действия",
    //report
    report_use: "report [Сообщение]",
    report_description: "Сообщает что-либо персоналу сервера (мин 10 символов)",
    report_small_desc: "Сообщает что-либо персоналу сервера",
    report_examples:
        "`report Polliog оскорбил меня :(`",
    report_min_chars: "сообщение должно содержать не менее 10 символов.",
    report_not_configured: "На сервере не настроен канал для приема сообщений.",
    report_sent: "Сообщение отправлено!",
    //poll
    poll_use: "poll \"[Наименование]\" \"[Вариант1]\" \"[Вариант2]\" \"(Опции)\"",
    poll_description: "Создание опроса с несколькими вариантами, максимум 9 ввариантов",
    poll_small_desc: "Создание опроса с несколькими вариантами",
    poll_examples:
        '`poll "Что лучше: суши или пицца?" "пицца" "суши"`\n',
    poll_max_options: "Вы можете использовать до 9 вариантов",
    //info
    info_bot: "Информация о боте",
    info_use: "информация",
    info_cmd_description: "Показывает информацию о боте",
    started: "Начало",
    version: "Версия",
    //antiflood
    antiflood_use: "antiflood [enable/disable | limit | action | time] {Количество} {Действие}",
    antiflood_description:
        "Программа Антифлуд позволяет защитить сервер от пользователей, которые постоянно набирают большое количество однотипных сообщений, т.н. паразитного трафика\n\n" +
        ":small_blue_diamond: `antiflood [enable/disable]`\n" +
        "Подключить или отключить Антифлуд\n" +
        ":small_blue_diamond: `antiflood limit [Предел]`\n" +
        "Установка максимального количество сообщений, которые можно отправить за определенное время\n" +
        ":small_blue_diamond: `antiflood action [Ban | Kick | Warn | Mute | none]`\n" +
        "Установка конкретного действия, которое выполнит бот при обнаружении флуда\n" +
        ":small_blue_diamond: `antiflood time [Время]`\n" +
        "Установка времени **в секундах**, которое определяет флуд",
    antiflood_small_desc: "Открывает настройки программы Антифлуд",
    antiflood_examples:
        "`antiflood enable`\n" +
        "`antiflood limit 4`\n" +
        "`antiflood action ban`\n" +
        "`antiflood time 5`",
    //antiflood enable/disable
    antiflood_mode_use: "antiflood [Enable | Disable]",
    antiflood_mode_description: "Включает или выключает Антифлуд",
    antiflood_mode_small_desc: "Включает или выключает Антифлуд",
    antiflood_mode_examples:
        "`antiflood enable`\n" +
        "`antiflood disable`",
    antiflood_enabled: "Антифлуд включен!",
    antiflood_disabled: "Антифлуд отключен!",
    //antiflood limit
    antiflood_limit_use: "antiflood limit [Ограничение]",
    antiflood_limit_description: "Установка максимального количества сообщений, которые можно отправить за определенное время\n" +
        "**Чем выше ограничение, тем больше сообщений нужно отправить для активации Антифлуда**",
    antiflood_limit_small_desc: "Установка максимального количества сообщений, которые можно отправить за определенное время",
    antiflood_limit_examples: "`antiflood limit 5`",
    antiflood_limit_min: "3 сообщения состовляют минимальное ограничение Антифлуда",
    antiflood_limit_updated: (limit) => {
        return `Ограничение Антифлуда изменено, **Новое Ограничение**: \`${limit}\``
    },
    //antiflood action
    antiflood_action_use: "antiflood action [Ban | Kick | Warn | Mute | none]",
    antiflood_action_description: "Установка конкретного действия, которое выполнит бот при обнаружении флуда, используйте `none`, чтобы не выполнять никаких действий (кроме удаления сообщений)",
    antiflood_action_small_desc: "Установка конкретного действия, которое выполнит бот при обнаружении флуда",
    antiflood_action_examples:
        "`antiflood action ban`\n" +
        "`antiflood action none`",
    antiflood_action_updated: (action) => {
        return `Действие Антифлуда обновлено, **Действие**: \`${action}\``
    },
    //antiflood time
    antiflood_time_use: "antiflood time [Секунды]",
    antiflood_time_description: "Установка времени **в секундах**, которое определяет флуд",
    antiflood_time_small_desc: "Установка времени, которое определяет флуд",
    antiflood_time_examples:
        "`antiflood time 4`",
    antiflood_time_min: "Минимальное время для Антифлуда 3 секунды ",
    antiflood_time_updated: (time) => {
        return `Время Антифлуда обновлено, **Новое Время**: \`${time} Секунды\``
    },
    antiflood_in_action: (member) => {
        return `${member}**, Вы отправляете слишком много сообщений и слишком быстро!**`
    },
    antiflood_acted: "[NISD AutoMod] Пользователь отправил слишком много сообщений слишком быстро!",
    //antispam
    antispam_use: "antispam [enable/disable | action] {Действие}",
    antispam_description:
        "Антиспам является функцией, которая автоматически удаляет все спам-сообщения (приглашения на сервер) на сервере\n\n" +
        ":small_blue_diamond: `antispam [enable/disable]`\n" +
        "Подключить или отключить Антиспам\n" +
        ":small_blue_diamond: `antispam action [Ban | Kick | Warn | Mute | none]`\n" +
        "Установка действия, которое будет выполнять бот при обнаружении спам-ссылки",
    antispam_small_desc: "Открывает настройки Антиспама",
    antispam_examples:
        "`antispam enable`\n" +
        "`antispam action warn`",
    antispam_in_action: (member) => {
        return `${member}**, Обнаружена ссылка-приглашение !**`
    },
    antispam_acted: "[NISD AutoMod] Обнаружена ссылка-приглашение!",
    //antispam action
    antispam_action_use: "antispam action [Ban | Kick | Warn | Mute | none]",
    antispam_action_description: "Установка конкретного действия, которое предпримет бот при обнаружении спам-сообщения, " +
        "используйте `none`, чтобы не предпринимать никаких действий (кроме удаления сообщения)",
    antispam_action_small_desc: "Установка конкретного действия, которое предпримет бот при обнаружении спама",
    antispam_action_examples:
        "`antispam action ban`\n" +
        "`antispam action none`",
    antispam_action_updated: (action) => {
        return `AntiSpam action updated **Action**: \`${action}\``
    },
    //antispam enable/disable
    antispam_enabled: "Антиспам подключен!",
    antispam_disabled: "Антиспам отключен!",
    //antinuke
    antinuke_use: "antinuke [Категория] [limit | action | enable/disable] {Опции}",
    antinuke_description:
        "Для просмотра действующих настроек используйте\`antinuke info\`\n\n" +
        "Изменение настроек AntiNuke, для изменения конкретной найстройки используйте `antinuke [категория]`\n" +
        "Если пользователь достигает \"предела\" какого-либо действия, бот его наказывате, за каждое действие полагается свое наказание\n" +
        "Можно установить  \"глобальный/общий\" предел через `antinuke global [Число]`\n\n" +
        ":small_blue_diamond: \`antinuke ban [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество блокировок до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke kick [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество удалений до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke rolecreate [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество созданных ролей до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke roledel [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество удаленных ролей до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke channelcreate [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество созданных каналов до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke channeldel [limit | action | enable/disable] {Опции}\`\n" +
        "Измените количество удаленных каналов до срабатывания программы AntiNuke бота\n" +
        ":small_blue_diamond: \`antinuke global [Число]\`\n" +
        "Установка нового глобального предела\n" +
        ":small_blue_diamond: \`antinuke info\`\n" +
        "Проверка текущих настроек AntiNuke",
    antinuke_small_desc: "Просмотр всех настроек AntiNuke",
    antinuke_examples:
        "`antinuke info`\n" +
        "`antinuke global 5`\n" +
        "`antinuke ban enable`\n" +
        "`antinuke kick action ban`\n" +
        "`antinuke rolecreate limit 4`",
    antinuke_warnings: "[ANTINUKE] Внимание, вы превышаете допустимый предел программы AntiNuke",
    //antiban
    antiban_use: "antiban [limit | action | enable/disable] {Опции}",
    antiban_description:
        "Антибан является функцией AntiNuke, воздействующая на пользователей, которые постоянно блокируют множество других участников\n\n" +
        ":small_blue_diamond: \`antiban enable/disable\`\n" +
        "Подключите/Отключите Антибан\n" +
        ":small_blue_diamond: \`antiban limit [Число]\`\n" +
        "Измените количество блокировок, необходимое для активации Антибана\n" +
        ":small_blue_diamond: \`antiban action [Санкции]\`\n" +
        "Измените санкции Антибана",
    antiban_small_desc: "Изменить настройки функции AntiNuke Антибана",
    antiban_examples:
        "`antiban enable`\n" +
        "`antiban disable`\n" +
        "`antiban limit 5`\n" +
        "`antiban action ban`",
    antiban_enabled: "Антибан включен!",
    antiban_disabled: "Антибан выключен!",
    antiban_acted: "[ANTIBAN] Обнаружено большое количество банов, выполненных пользователем",
    //antiban action
    antiban_action_use: "antiban action [Ban | Kick | Warn | Mute]",
    antiban_action_description:
        "Установка конкретного действия, которое должен выполнить бот в случае превышения пользователем установленного предела",
    antiban_action_examples:
        "`antiban action ban`",
    antiban_action_updated: (action) => {
        return `Действие Антибана обновлено, **Действие**: \`${action}\``
    },
    //antiban limit
    antiban_limit_use: "antiban limit [Количество]",
    antiban_limit_description:
        "Установка предела функции AntiNuke Антибана",
    antiban_limit_examples:
        "`antiban limit 3`",
    antiban_limit_updated: (limit) => {
        return `Предел Антибана изменен, **Новый предел**: \`${limit}\``
    },
    //antikick
    antikick_use: "antikick [limit | action | enable/disable] {Опции}",
    antikick_description:
        "Антикик является функцией AntiNuke, воздействующая на пользователей, которые постоянно исключают множество других участников\n\n" +
        ":small_blue_diamond: \`antikick enable/disable\`\n" +
        "Подключите/Отключите Антикик\n" +
        ":small_blue_diamond: \`antikick limit [Число]\`\n" +
        "Измените количество исключений, необходимое для активации Антикика\n" +
        ":small_blue_diamond: \`antikick action [Санкции]\`\n" +
        "Измените санкции Антикика",
    antikick_small_desc: "Изменить настройки функции AntiNuke Антикика",
    antikick_examples:
        "`antikick enable`\n" +
        "`antikick disable`\n" +
        "`antikick limit 5`\n" +
        "`antikick action ban`",
    antikick_enabled: "Антикик включен!",
    antikick_disabled: "Антикик выключен!",
    antikick_acted: "[ANTIKICK] Обнаружено большое количество исключений, выполненных пользователем",
    //antikick action
    antikick_action_use: "antikick action [Ban | Kick | Warn | Mute]",
    antikick_action_description:
        "Установка конкретного дейстсвия,которое должен выполнить бот в случае превышения пользователем установленного предела",
    antikick_action_examples:
        "`antikick action ban`",
    antikick_action_updated: (action) => {
        return `Действие Антикика обновлено, **Действие**: \`${action}\``
    },
    //antikick limit
    antikick_limit_use: "antikick limit [Количество]",
    antikick_limit_description:
        "Установка предела функции AntiNuke Антикика",
    antikick_limit_examples:
        "`antikick limit 3`",
    antikick_limit_updated: (limit) => {
        return `Предел Антикика изменен, **Новый Предел**: \`${limit}\``
    },
    //antirolecreate
    antirolecreate_use: "antirolecreate [limit | action | enable/disable] {Опции}",
    antirolecreate_description:
        "Ограничитель созданных ролей является функцией AntiNuke,которая используется против пользователей, создающих множество ролей за короткое время\n\n" +
        ":small_blue_diamond: \`antirolecreate enable/disable\`\n" +
        "Подлючите/Отключите Ограничитель созданных ролей\n" +
        ":small_blue_diamond: \`antirolecreate limit [Число]\`\n" +
        "Измените количество созданных ролей, необходимых для активации Ограничителя созданных ролей\n" +
        ":small_blue_diamond: \`antirolecreate action [Санкции]\`\n" +
        "Измените санкции Ограничения созданных ролей",
    antirolecreate_small_desc: "Измените настройки Ограничителя созданных ролей",
    antirolecreate_examples:
        "`antirolecreate enable`\n" +
        "`antirolecreate disable`\n" +
        "`antirolecreate limit 5`\n" +
        "`antirolecreate action ban`",
    antirolecreate_enabled: "Ограничитель созданных ролей подключен!",
    antirolecreate_disabled: "Ограничитель созданных ролей отключен!",
    antirolecreate_acted: "[ANTIROLECREATE] Обнаружено большое количество ролей, созданных пользователем",
    //antirolecreate action
    antirolecreate_action_use: "antirolecreate action [Ban | Kick | Warn | Mute]",
    antirolecreate_action_description:
        "Установка конкретного действия, которое должен выполнить бот в случае превышения пользователем установленного предела",
    antirolecreate_action_examples:
        "`antirolecreate action ban`",
    antirolecreate_action_updated: (action) => {
        return `Действие Ограничителя созданных ролей обновлено, **Действие**: \`${action}\``
    },
    //antirolecreate limit
    antirolecreate_limit_use: "antirolecreate limit [Количество]",
    antirolecreate_limit_description:
        "Установка предела Ограничителя созданных ролей AntiNuke",
    antirolecreate_limit_examples:
        "`antirolecreate limit 3`",
    antirolecreate_limit_updated: (limit) => {
        return `Предел Ограничителя созданных ролей изменен, **Новый предел**: \`${limit}\``
    },
    //antiroledelete
    antiroledelete_use: "antiroledelete [limit | action | enable/disable] {Опции}",
    antiroledelete_description:
        "Ограничитель удаленных ролей является функцией AntiNuke, которая используется против пользователей, удаляющих большое количество ролей за короткое время\n\n" +
        ":small_blue_diamond: \`antiroledelete enable/disable\`\n" +
        "Подключите/Отключите Ограничитель удаленных ролей\n" +
        ":small_blue_diamond: \`antiroledelete limit [Количество]\`\n" +
        "Измените количество удаленных ролей, необходимое для активации Ограничителя удаленных ролей\n" +
        ":small_blue_diamond: \`antiroledelete action [Санкции]\`\n" +
        "Измените санкции Ограничителя удаленных ролей",
    antiroledelete_small_desc: "Измените настройки Ограничителя удаленных ролей",
    antiroledelete_examples:
        "`antiroledelete enable`\n" +
        "`antiroledelete disable`\n" +
        "`antiroledelete limit 5`\n" +
        "`antiroledelete action ban`",
    antiroledelete_enabled: "Ограничитель удаленных ролей включен!",
    antiroledelete_disabled: "Ограничитель удаленных ролей отключен!",
    antiroledelete_acted: "[ANTIROLEDELETE] Обнаружено большое количество ролей, удаленных пользователем",
    //antiroledelete action
    antiroledelete_action_use: "antiroledelete action [Ban | Kick | Warn | Mute]",
    antiroledelete_action_description:
        "Установка конкретного действия, которое должен выполнить бот в случае превышения пользователем установленного предела",
    antiroledelete_action_examples:
        "`antiroledelete action ban`",
    antiroledelete_action_updated: (action) => {
        return `Действие Ограничителя удаленных ролей обновлено, **Действие**: \`${action}\``
    },
    //antiroledelete limit
    antiroledelete_limit_use: "antiroledelete limit [Количество]",
    antiroledelete_limit_description:
        "Установка предела Ограничителя удаленных ролей",
    antiroledelete_limit_examples:
        "`antiroledelete limit 3`",
    antiroledelete_limit_updated: (limit) => {
        return `Предел Ограничителя удаленных ролей изменен, **Новый предел**: \`${limit}\``
    },
    //antichannelcreate
    antichannelcreate_use: "antichannelcreate [limit | action | enable/disable] {Опции}",
    antichannelcreate_description:
        "Ограничитель созданых каналов является функцией AntiNuke, которая используется против пользователей, создающих большое количество каналов за короткое время\n\n" +
        ":small_blue_diamond: \`antichannelcreate enable/disable\`\n" +
        "Включите/Отключите Ограничитель созданных каналов\n" +
        ":small_blue_diamond: \`antichannelcreate limit [Число]\`\n" +
        "Измените количество созданных каналов, необходимое для активации Ограничителя созданных каналов\n" +
        ":small_blue_diamond: \`antichannelcreate action [Санкции]\`\n" +
        "Измените санкции Ограничителя созданных каналов",
    antichannelcreate_small_desc: "Измените настройки Ограничителя созданных каналов",
    antichannelcreate_examples:
        "`antichannelcreate enable`\n" +
        "`antichannelcreate disable`\n" +
        "`antichannelcreate limit 5`\n" +
        "`antichannelcreate action ban`",
    antichannelcreate_enabled: "Ограничитель созданных каналов включен!",
    antichannelcreate_disabled: "Ограничитель созданных каналов отключен!",
    antichannelcreate_acted: "[ANTICHANNELCREATE] Обнаружено большое количество каналов, созданных пользователем",
    //antichannelcreate action
    antichannelcreate_action_use: "antichannelcreate action [Ban | Kick | Warn | Mute]",
    antichannelcreate_action_description:
        "Установка конкретного действия, которое должен выполнить бот в случае превышения пользователем установленного предела",
    antichannelcreate_action_examples:
        "`antichannelcreate action ban`",
    antichannelcreate_action_updated: (action) => {
        return `Действие Ограничителя созданных каналов обновлено, **Действие**: \`${action}\``
    },
    //antichannelcreate limit
    antichannelcreate_limit_use: "antichannelcreate limit [Количество]",
    antichannelcreate_limit_description: "Установите предел Ограничителя созданных каналов",
    antichannelcreate_limit_examples:
        "`antichannelcreate limit 3`",
    antichannelcreate_limit_updated: (limit) => {
        return `Предел Ограничителя созданных каналов изменен, **Новый предел**: \`${limit}\``
    },
    //antichanneldelete
    antichanneldelete_use: "antichanneldelete [limit | action | enable/disable] {Опции}",
    antichanneldelete_description:
        "Ограничитель удаленных каналов является функцией AntiNuke, который используется против пользователей, удаляющих большое количество каналов за короткое время\n\n" +
        ":small_blue_diamond: \`antichanneldelete enable/disable\`\n" +
        "Подключите/Отключите Ограничитель удаленных каналов\n" +
        ":small_blue_diamond: \`antichanneldelete limit [Число]\`\n" +
        "Измените количество удаленных каналов, необходимое для активации Ограничителя удаленных каналов\n" +
        ":small_blue_diamond: \`antichanneldelete action [Санкции]\`\n" +
        "Измените санкции Ограничителя удаленных каналов",
    antichanneldelete_small_desc: "Измените настройки Ограничителя удаленных каналов",
    antichanneldelete_examples:
        "`antichanneldelete enable`\n" +
        "`antichanneldelete disable`\n" +
        "`antichanneldelete limit 5`\n" +
        "`antichanneldelete action ban`",
    antichanneldelete_enabled: "Ограничитель удаленных каналов включен!",
    antichanneldelete_disabled: "Ограничитель удаленных каналов выключен!",
    antichanneldelete_acted: "[ANTICHANNELDELETE] Обнаружено большое количество каналов, удаленных пользователем",
    //antichanneldelete action
    antichanneldelete_action_use: "antichanneldelete action [Ban | Kick | Warn | Mute]",
    antichanneldelete_action_description:
        "Установка конкретного действия, которое должен выполнить бот в случае превышения пользователем установленного предела",
    antichanneldelete_action_examples:
        "`antichanneldelete action ban`",
    antichanneldelete_action_updated: (action) => {
        return `Действие Ограничителя удаленных каналов обновлено, **Действие**: \`${action}\``
    },
    //antichanneldelete limit
    antichanneldelete_limit_use: "antichanneldelete limit [Количество]",
    antichanneldelete_limit_description: "Установите предел Ограничителя удаленных каналов",
    antichanneldelete_limit_examples:
        "`antichanneldelete limit 3`",
    antichanneldelete_limit_updated: (limit) => {
        return `Предел Ограничителя удаленных каналов изменен, **Новый предел**: \`${limit}\``
    },
    //antinuke global
    antinukeglobal_use: "antinuke global [Количество]",
    antinukeglobal_description:
        "**Установите общий предел AntiNuke**\n" +
        "Под общим пределом понимается сумма всех действий, совершенных пользователем и зафиксированных AntiNuke бота за последнии ±30 секунд.\n" +
        "**Бот будет учитывать только действия активированных функций, для просмотра активированных функций AntiNuke используйте`antinuke info`**",
    antinukeglobal_small_desc: "Установите общий предел AntiNuke",
    antinukeglobal_examples:
        "`antinuke global 10`",
    antinukeglobal_updated: (limit) => {
        return `Общий предел AntiNuke изменен, **Новый предел**: \`${limit}\``
    },
    antinukeglobal_warnings: "[ANTINUKE] Внимание, вы превышаете общий предел AntiNuke",
    //antinuke info
    antinuke_info_title: "Настройки AntiNuke",
    antinuke_info_description:
        "На этой панели отображаются все текущие настройки AntiNuke, " +
        "вы можете изменить различные настройки с помощью `antinuke [Раздел]` или с помощью отдельных команд `antiban {...}`",
    antinuke_info_global_title: "Общий предел",
    //antiraid
    antiraid_use: "antiraid [limit | action | enable/disable | time] {Опции}",
    antiraid_description:
        "Антирейд позволяет защитить сервер от проникновения слишком многих пользователей за короткое время\n\n" +
        ":small_blue_diamond: \`antiraid enable/disable\`\n" +
        "Включите/Отключите Антирейд\n" +
        ":small_blue_diamond: \`antiraid limit [Количество]\`\n" +
        "Измените количество пользователей, вошедших в систему за определенное время, необходимое для активации Антирейда\n" +
        ":small_blue_diamond: `antiraid time [Время]`\n" +
        "Установите время **в секундах**, за которое определяется рейд\n" +
        ":small_blue_diamond: \`antiraid action [Санкции]\`\n" +
        "Измените санкции Антирейда",
    antiraid_small_desc: "Измените настройки Антирейда",
    antiraid_examples:
        "`antiraid enable`\n" +
        "`antiraid disable`\n" +
        "`antiraid time 6`\n" +
        "`antiraid limit 5`\n" +
        "`antiraid action ban`",
    antiraid_enabled: "Антирейд включен!",
    antiraid_disabled: "Антирейд выключен!",
    antiraid_acted: "[ANTIRAID] Обнаружено большое количество пользователей, вошедших в систему одновременно",
    //antiraid limit
    antiraid_limit_use: "antiraid limit [Предел]",
    antiraid_limit_description: "Установка максимально допустимого количества пользователей, вошедших в систему за определенное время\n" +
        "**Чем выше установленный предел, тем большее количество пользователй, вошедших в систему, понадобится для активации Антирейда**",
    antiraid_limit_small_desc: "Установите максимально допустимое количество пользователей, вошедших в систему за определенное время",
    antiraid_limit_examples: "`antiraid limit 5`",
    antiraid_limit_min: "Минимальный предел для Антирейда составляют 3 пользователя",
    antiraid_limit_updated: (limit) => {
        return `Предел Антирейда изменен, **Новый Предел**: \`${limit}\``
    },
    //antiraid action
    antiraid_action_use: "antiraid action [Ban | Kick | Warn | Mute]",
    antiraid_action_description: "Установите конкретное действие, которое выполнит бот при обнаружении рейда",
    antiraid_action_small_desc: "Установите конкретное действие, которое выполнит бот при обнаружении рейда",
    antiraid_action_examples:
        "`antiraid action ban`\n" +
        "`antiraid action none`",
    antiraid_action_updated: (action) => {
        return `Действие Антирейда обновлено, **Дейтсвие**: \`${action}\``
    },
    //antiraid time
    antiraid_time_use: "antiraid time [Секунды]",
    antiraid_time_description: "Установите время **в секундах**, за которое определяется рейд",
    antiraid_time_small_desc: "Установите время, за которое определяется рейд",
    antiraid_time_examples:
        "`antiraid time 4`",
    antiraid_time_min: "Минимальное ограничение времени для Антирейда составляют 3 секунды",
    antiraid_time_updated: (time) => {
        return `Время Антирейда обновлено, **Новое время**: \`${time} Секунды\``
    },
    //autoaction
    autoaction_use: "autoaction [add | remove | list] {Опции}",
    autoaction_description:
        "Установите действие, которое будет выполняться автоматически, как только пользователь достигнет определенного количества предупреждений\n\n" +
        ":small_blue_diamond: `autoaction add [число] [ban | kick | mute] {время}`\n" +
        "Добавьте действие, которое выполнит бот при заданном количестве предупреждений\n" +
        ":small_blue_diamond: `autoaction remove [число]`\n" +
        "Удалите действие Автодействия\n" +
        ":small_blue_diamond: `autoaction list`\n" +
        "Покажите действия, которые будут выполняться ботом при определенном количестве предупреждений",
    autoaction_small_desc: "Измените автоматические действия бота в ответ на определенные предупреждения",
    autoaction_examples:
        "`autoaction list`\n" +
        "`autoaction remove 2`\n" +
        "`autoaction add 3 kick`\n" +
        "`autoaction add 5 ban 2d`",
    //autoaction add
    autoaction_add_use: "autoaction add [число] [ban | kick | mute] {время}",
    autoaction_add_description:
        "**Доступные действия**:\n" +
        "`ban (Время)` = Блокирует пользователя на сервере, указание времени произвольно\n" +
        "`kick` = Изгоняет пользователя с сервера\n" +
        "`mute (Время)` = Отключает текстовые каналы пользователя, указание времени произвольно\n" +
        "**Примечание**: Роль пользователя с отключенными текстовыми каналами должна быть выбрана с помощью `setmuterole [Роль]`",
    autoaction_add_examples:
        "`autoaction add 5 mute 12h`",
    autoaction_already_exists: (number) => {
        return `Для данного количества \`${number}\` предупреждений уже установлена мера наказания. Проверьте другие распоряжения с помощью команды \`autoaction list\``
    },
    autoaction_added: (number, action, time) => {
        let real_action


        switch (action) {
            case 'ban':
                real_action = 'заблокирован'
                break
            case 'kick':
                real_action = 'исключен'
                break
            case 'mute':
                real_action = 'отключен'
                break
            default:
                real_action = "?"
                break
        }

        let send = `Настройки обновлены, уже получено \`${number}\` предупреждений, пользователь будет ${real_action}`

        if (time !== null) {
            send = send + ' временно'
        }

        return send
    },
    //autoaction remove
    autoaction_remove_use: "autoaction remove [Количество]",
    autoaction_remove_description: "Удалите автоматические действия",
    autoaction_remove_examples:
        "`autoaction remove 3`",
    autoaction_dont_exists: (number) => {
        return `Не установлено никакого распоряжения для данного количества \`${number}\` предупреждений. Проверьте другие распоряжения с помощью команды \`autoaction list\``
    },
    autoaction_removed: "Распоряжение удалено",
    //autoaction list
    autoaction_list_description: "**Установленные распоряжения**:",
    autoaction_list_null: "Не установлено никакого распоряжения :(",
    //autoaction reasons
    autoaction_reason: "[AUTOACTION] Вы получили слишком много предупреждений",
    //autodelwarn
    autodelwarn_use: "autodelwarn [enable/disable | Set] {Время}",
    autodelwarn_description:
        "Данная функция позволяет удалить предупреждения через определенное время\n" +
        ":small_blue_diamond: `autodelwarn enable/disable`\n" +
        "Включить/Отключить автоматическое удаление предупреждений\n" +
        ":small_blue_diamond: `autodelwarn set [Время]\n`" +
        "Установите время, по истечении которого предупреждения будут автоматически удалены",
    autodelwarn_small_desc: "Установите автоматическое удаление предупреждений",
    autodelwarn_examples:
        "`autodelwarn enable`\n" +
        "`autodelwarn set 1M`",
    autodelwarn_enabled: "Автоматическое удаление предупреждений включено!",
    autodelwarn_disabled: "Автоматическое удаление предупреждений выключено!",
    //autodelwarn set
    autodelwarn_set_use: "autodelwarn set [Время]",
    autodelwarn_set_description: "Установите время, по истечении которого предупреждения будут автоматически удалены",
    autodelwarn_set_examples:
        "`autodelwarn set 1m`",
    autodelwarn_set_updated: (time) => {
        return `Время автоматического удаления предупреждений обновлено, **Новое время**: \`${time}\``
    },
    //blacklist
    blacklist_use: "blacklist [enable/disable | add/remove | action | list] {Опции}",
    blacklist_description:
        "Черный список представляет собой список запрещенных слов, которые будут автоматически исключены, даже если они являются частью предложения, **Бот также постарается обнаружить похожие фразы/слова (набранные специальными символами или похожими знаками)**\n\n" +
        ":small_blue_diamond: `blacklist enable/disable`\n" +
        "Включите/Отключите черный список на сервере\n" +
        ":small_blue_diamond: `blacklist add/remove [Слово/Фраза]`" +
        "Добавьте/Удалите слово или фразу к черному списку\n" +
        ":small_blue_diamond: `blacklist action [Действие]`\n" +
        "Измените действие, предпринимаемое ботом при обнаружении запрещенного слова, используйте к качестве действия **none**, чтобы не выполнять никаких действий против пользователя (кроме удаления сообщения)\n" +
        ":small_blue_diamond: `blacklist list`\n" +
        "Показ текущего черного списка",
    blacklist_small_desc: "Откройте настройки черного списка",
    blacklist_examples:
        "\`blacklist enable\`\n" +
        "\`blacklist add \"слово\"\`\n" +
        "\`blacklist add \"фраза\" \`\n" +
        "\`blacklist remove слово\`\n" +
        "\`blacklist action ban\`\n" +
        "\`blacklist list\`",
    blacklist_enabled: "Черный список включен!",
    blacklist_disabled: "Черный список выключен!",
    blacklist_add_remove_use: "blacklist add/remove [Слово/Фраза]",
    blacklist_add_remove_description: "Добавьте в/Удалите слово или фразу из Черного списка, изпользуйте `blacklist list` для показа запрещенных слов/фраз",
    blacklist_add_remove_examples:
        "\`blacklist add \"слово\"\`\n" +
        "\`blacklist add \"фраза\"\`\n" +
        "\`blacklist remove \"слово\"\`\n" +
        "\`blacklist remove \"фраза\"\`\n",
    blacklist_word_already_added: "Введенное слово/фраза уже в черном списке",
    blacklist_word_not: "Введенное слово/фраза не входят в черный список",
    blacklisted_word_added: (word) => {
        return `Черный список обновлен, **Добавлен**: \`${word}\``
    },
    blacklisted_word_removed: (word) => {
        return `Черный список обновлен, **Удален**: \`${word}\``
    },
    blacklisted_words: "Запрещенные слова",
    blacklist_list_clear: "Никаких запрещенных слов :(",
    blacklist_acted: "[NISD AUTOMOD] Обнаружено запрещенное слово!",
    blacklist_in_action: (member) => {
        return `${member}**, Обнаружено запрещенное слово!**`
    },
    blacklist_action_use: "blacklist action [Ban | Kick | Warn | Mute | None]",
    blacklist_action_description:
        "Установите действие, которое должен выполнить бот, если пользователь отправляет сообщение, содержащее" +
        " запрещенное слово, используйте **none**, чтобы не выполнять никаких действий (кроме удаления сообщения)",
    blacklist_action_examples:
        "`blacklist action ban`",
    blacklist_action_updated: (action) => {
        return `Действие Черного списка обновлено, **Действие**: \`${action}\``
    },
    blacklist_action_removed: "Действие Черного списка удалено",
    //bypassrole
    bypassrole_use: "bypassrole [add / remove | list] {@Роль/ID}",
    bypassrole_description:
        "Создание списка ролей \"игнорируемых\" Автомодерацией \n\n" +
        ":small_blue_diamond: \`bypassrole add/remove [@Роль/ID]\`\n" +
        "Добавьте/Удалите роль, которую \"игнорирует\" Автоматическая Модерация\n" +
        ":small_blue_diamond: \`bypassrole list\`\n" +
        "Показ всего списка ролей \"игнорируемых\" Автомодерацией",
    bypassrole_small_desc: "Установка ролей, которые будут игнорироваться Автомодерацией",
    bypassrole_examples:
        "\`bypassrole add @роль\`\n" +
        "\`bypassrole remove id\`\n" +
        "\`bypassrole list\`",
    //bypassrole add/remove
    bypassrole_add_remove_use: "bypassrole add/remove [@Роль/ID]",
    bypassrole_add_remove_description: "Добавьте/Удалите роль, которая будет \"игнорироваться\" Автомодерацией",
    bypassrole_add_remove_examples:
        "\`bypassrole add @роль\`\n" +
        "\`bypassrole remove id\`\n",
    bypassrole_role_already: "Выбранная роль уже игнорируется",
    bypassrole_role_not: "Выбранная роль отсутствует в списке игнорируемых ролей",
    bypassrole_role_added: (role) => {
        return `Роль добавлена, **Роль**: ${role}`
    },
    bypassrole_role_removed: (role) => {
        return `Роль удалена, **Роль**: ${role}`
    },
    bypassrole_ignored_roles: "Игнорируемые роли",
    bypassrole_clear: "Игнорируемые роли отсутствуют",
    //bypasschannel
    bypasschannel_use: "bypasschannel [add/remove | list] {#Канал/ID}",
    bypasschannel_description:
        "Создание списка каналов, игнорируемых Автомодерацией бота\n\n" +
        ":small_blue_diamond: \`bypasschannel add/remove [#Канал/ID]\`\n" +
        "Добавьте в/Удалите канал из списка игнорируемых\n" +
        ":small_blue_diamond:\`bypasschannel list\`\n" +
        "Показ всего списка игнорируемых каналов",
    bypasschannel_small_desc: "Установка каналов, которые будут игнорироваться Автомодерацией",
    bypasschannel_examples:
        "\`bypasschannel add #канал\`\n" +
        "\`bypasschannel remove id\`\n" +
        "\`bypasschannel list\`",
    //bypasschannel add/remove
    bypasschannel_add_remove_use: "bypasschannel add/remove [@Роль/ID]",
    bypasschannel_add_remove_description: "Добавьте/Удалите канал, который будет\"игнорироваться\" Автомодерацией",
    bypasschannel_add_remove_examples:
        "\`bypasschannel add #канал\`\n" +
        "\`bypasschannel remove id\`\n",
    bypasschannel_channel_already: "Выбранный канал уже игнорируется",
    bypasschannel_channel_not: "Выбранный канал отсутствует в списке игнорируемых каналов",
    bypasschannel_channel_added: (channel) => {
        return `Канал добавлен, **Канал**: ${channel}`
    },
    bypasschannel_channel_removed: (channel) => {
        return `Канал удален, **Канал**: ${channel}`
    },
    bypasschannel_ignored_channels: "Игнорируемые каналы",
    bypasschannel_clear: "Игнорируемые каналы отсутствуют",
    //Captcha
    captcha_use: "captcha [Категория] {Параметры}",
    captcha_description:
        "Верификация с помощью полностью автоматизированного публичного теста Тьюринга для различения компьютеров и людей, далее тест капча, позволяет послать код пользователю в частном порядке, которой должен будет переписать его для проверки.\n" +
        "Каждая из приведенных ниже команд содержит отдельную справочную страницу, где можно найти дополнительную информацию\n" +
        "**Для работы, тест капча требует задать пользователю роль и рекомендуется установить канал для регистров.**\n\n" +
        ":small_blue_diamond: `captcha enable/disable`\n" +
        "Включите/Отключите тест капча\n" +
        ":small_blue_diamond: `captcha mode [fake | new | all]`\n" +
        "Установите, к каким пользователям применять тест капча\n" +
        ":small_blue_diamond: `captcha role [@Роль/ID]`\n" +
        "Выберите роль, которая будет присвоена пользователю после прохождения теста капча\n" +
        ":small_blue_diamond: `captcha action [ban | kick | mute | none]`\n" +
        "Выберите действие, которое выполнит бот по отношению к пользователю, не прошедшему тест капча\n" +
        ":small_blue_diamond: `captcha time [минуты]`\n" +
        "Установите, сколько минут есть у пользователя, чтобы ввести код\n" +
        ":small_blue_diamond: `captcha bypass [@Участник/ID]`\n" +
        "Не запускайте теста капча для пользователя\n" +
        ":small_blue_diamond: `captcha resend [@Участник/ID]`\n" +
        "Повторите тест капча для пользователя\n" +
        ":small_blue_diamond: `captcha log-channel [#Канал/ID | None]`\n" +
        "Выберите канал для получения всей информации о тесте капча\n" +
        ":small_blue_diamond: `captcha toggle-role [@Роль/ID | None]`\n" +
        "Выберите роль, которая будет удалена после прохождения пользователем теста капча\n" +
        ":small_blue_diamond: `captcha info`\n" +
        "Показ текущих настроек теста капча",
    captcha_examples: "Из-за большого количества команд, все примеры представлены в разных категориях^^",
    captcha_small_desc: "Настройка теста капча ",
    //captcha
    captcha_enabled: "Тест капча включен",
    captcha_disabled: "Тест капча выключен",
    //captcha mode
    captcha_mode_use: "captcha mode [fake | new | all]",
    captcha_mode_description: "Укажите, каких пользователей следует проверять с помощью теста капча, используя перечисленные режимы, созданные заранее:\n" +
        "`fake` = Провести проверку пользователей, учетная запись которых была создана меньше \`2-3 часов\`\n" +
        "`new` = Провести проверку пользователей, которые недавно зарегистрировались в Discord \`~15 дней\`\n" +
        "`all` = Провести проверку \`всех пользователей\`\n\n" +
        "**Если пользователи не попадают во временные диапазоны режимов `fake` и `new`, тест капча будет игнорироваться, а пользователи автоматически зайдут на сервер**",
    captcha_mode_examples: "\`captcha mode all\`",
    captcha_mode_updated: (mode) => {
        return `Режим проверки с помощью теста капчи изменен, **Режим**: \`${mode}\``
    },
    //captcha role
    captcha_role_use: "captcha role [@Роль/ID]",
    captcha_role_description: "Добавьте роль, которая будет присвоена пользователю после прохождения теста капча",
    captcha_role_examples:
        "\`captcha role 123456789\`\n" +
        "\`captcha role @роль\`",
    captcha_role_updated: (role) => {
        return `Роль теста капча обновлена, **Роль**: ${role}`
    },
    //captcha action
    captcha_action_use: "captcha action [Ban | Kick | Warn | Mute | None]",
    captcha_action_description:
        "Установите действие, которое должен выполнить бот, если тест капча не выполнен",
    captcha_action_examples:
        "`captcha action ban`",
    captcha_action_updated: (action) => {
        return `Действие теста капча обновлено, **Действие**: \`${action}\``
    },
    captcha_action_removed: "Действие теста капча удалено",
    //captcha time
    captcha_time_use: "captcha time [минуты]",
    captcha_time_description: "Укажите, за сколько минут пользователь должен выполнить тест капча **ЗА ОДНУ ПОПЫТКУ**, **максимум 60 минут**",
    captcha_time_examples: "`captcha time 15`",
    captcha_time_updated: (time) => {
        return `Время выполнения теста капча обновлено, **Время**: \`${time} минуты\``
    },
    captcha_time_invalid_time: "Вводимое число должно быть от 1 до 60",
    //captcha log-channel
    captcha_logchannel_use: "captcha log-channel [#Канал/ID | None]",
    captcha_logchannel_description: "Установите канал для отправки всех регистров теста капчи, используйте **none** для удаления канала",
    captcha_logchannel_examples: "`captcha log-channel #canale`\n`captcha log-channel 133243243525324`\n`captcha log-channel none`",
    captcha_logchannel_updated: (channel) => {
        if (channel === null) {
            return "Канал регистров отключен"
        } else {
            return `Канал регистров теста капча установлен, **Канал**: ${channel}`
        }
    },
    //captcha toggle-role
    captcha_togglerole_use: "captcha toggle-role [@Роль/ID | None]",
    captcha_togglerole_description: "Выберите роль, которая будет удалена после прохождения пользователем теста капча, используйте **none** для отмены этой функции",
    captcha_togglerole_examples: "`captcha toggle-role @роль`\n`captcha toggle-role none`\n`captcha toggle-role 12321432432545`",
    captcha_togglerole_updated(role) {
        if (role === null) {
            return "Роль для удаления отключена"
        } else {
            return `Роль для удаления после прохождения теста капча установлена, **Роль**: ${role}`
        }
    },
    //CAPTCHA EMBEDS
    captcha_embed_title: "Требуется тест капча",
    captcha_embed_retry_title: "Тест капча не выполнен, попробуйте еще раз",
    captcha_embed_failed_title: "Тест капча не выполнен",
    captcha_embed_impossible_title: "Тест капча невозможен",
    captcha_embed_stopped_title: "Тест капча отменен",
    captcha_embed_auto_title: "Автоматический тест капча",
    captcha_embed_auto_started_title: "Автоматический тест капча начался",
    captcha_embed_started_title: "Тест капча начался",
    captcha_embed_completed_title: "Тест капча выполнен",
    captcha_embed_error_title: "Ошибка во время теста капча",
    captcha_acted: "Проверка с помощью теста капча не выполнена",
    captcha_embed_bypass_title: "Тест капча игнорируется",
    autocaptcha_embed_impossible_title: "Невозможно провести автоматический тест капча",
    captcha_embed_description: (minutes, tries) => {
        return `**Для доступа к серверу необходимо отправить приведенный ниже код в данный чат**\n` +
            `**Время для отправки кода**: \`${minutes} Минуты\`\n` +
            `**Оставшиеся попытки**: \`${tries}\`\n\n` +
            `**Код для отправки**:`
    },
    captcha_embed_retry_description: (mode) => {
        if (mode === "time") {
            return "Время истекло"
        } else if (mode === "fail") {
            return "Неправильный код"
        } else if (mode === "tries") {
            return "Попытки закончились"
        }
    },
    captcha_embed_stopped_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` покинул сервер, соответственно, проверка с помощью теста капча была отменена`
    },
    captcha_embed_started_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` начал проверку с помощью теста капча`
    },
    captcha_embed_auto_description_user: "Выяснилось, что у вас уже есть роль на сервере, поэтому вы прошли проверку капча автоматически",
    captcha_embed_auto_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` был проверен автоматически, так как ему нужно было добавить роль на сервере`
    },
    captcha_embed_completed_description_user: "проверка капча прошло успешно, скоро вы получите роль",
    captcha_embed_completed_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` успешно прошел тест капча `
    },
    captcha_embed_failed_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` не прошел тест капча`
    },
    captcha_embed_auto_started_description: (member) => {
        return `Пользователь ${member.user.username}#${member.user.discriminator} || \`${member.user.id}\` не попадает в диапазон действия теста капча, проверка опущена`
    },
    captcha_embed_bypass_description: (user, bypassMember) => {
        return `Пользователь ${user.username}#${user.discriminator} || \`${user.id}\` пропустил тест капча Пользователя ${bypassMember.user.username}#${bypassMember.user.discriminator} || \`${bypassMember.user.id}\``
    },
    //CAPTCHA ERRORS
    captcha_owner_error: (member, error) => {
        return `Кажется, произошла ошибка во время проверки пользователя \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\`\n\n` +
            `**Ошибка**: \`${error}\`\n\n` +
            `*Желательна настройка специального канала регистров капча, если вы больше не хотите получать данные сообщения*`
    },
    captcha_error_invalid_role: "Роль, присваеваемая пользователю после прохождения теста капча, отсутствует/недействительна",
    captcha_error_invalid_togglerole: "Роль, удаляемая после прохождения теста капча, отсутствует/недействительна",
    captcha_error_invalid_permissions: "Бот не может выполнить проверку капча из-за отсутствия необходимых разрешений",
    captcha_error_dm_blocked: (member) => {
        return `Пользователь \`${member.user.username}#${member.user.discriminator} || ${member.user.id}\` заблокировал личные сообщения, поэтому не могу провести проверку капча`
    },
    captcha_error_user: "Не могу провести тест капча из-за проблемы конфигурации",
    //CAPTCHA BYPASS
    captcha_bypass_use: "captcha bypass [@Пользователь/ID]",
    captcha_bypass_description: "Опустить тест капча для данного пользователя",
    captcha_bypass_examples:
        "\`captcha bypass @Polliog\`\n" +
        "\`captcha bypass 173569203977060353\`",
    captcha_bypassed_cmd: "Пользователь успешно прошел проверку",
    //CAPTCHA RESEND
    captcha_resend_use: "captcha resend [@Пользователь/ID]",
    captcha_resend_description: "Повторите тест капча пользователя",
    captcha_resend_examples:
        "\`captcha resend @Polliog\`\n" +
        "\`captcha resend 173569203977060353\`",
    captcha_resend_cmd: "Проверка капча успешно начата",
    //TICKETS
    //TICKETS INTERNAL
    ticketsInt_opened: "Билет Открыт",
    ticketsInt_openedInChannel: (channel) => `Билет открыт на канале ${channel}`,
    ticketsInt_openedby: (member) => `Билет открыт у ${member}`,
    ticketsInt_reopenedby: (member) => `Билет повторно открыт у ${member}`,
    ticketsInt_reopened: "Билет повторно открыт",
    ticketsInt_panel: "Панель",
    ticketsInt_ticket: "Билет",
    ticketsInt_close: "Закройте",
    ticketsInt_closed: "Закрыт",
    ticketsInt_closedPhrase: "Билет закрыт",
    ticketsInt_closedby: (member) => `Билет закрыт у ${member}`,
    ticketsInt_closedOptions: "📝 : Сделать копию билета\n\n🗑️ : Удалить билет\n\n🔁    : Повторно открыть билет",
    ticketsInt_transcriptSavedTitle: "Копия сохранена",
    ticketsInt_transcriptSavedDescriptionChannel: (channel) => `Копия отправлена на канал ${channel}`,
    ticketsInt_transcriptSavedDescriptionUser: (user) => `Копию сохранил ${user}`,
    ticketsInt_transcriptSavedInfos: "Для просмотра копии откройте файл, прикрепленный выше ",
    ticketsInt_delete_ask: "Вы действительно хотите удалить этот билет?",
    ticketsInt_deleted_logs: "Билет удален",
    //TICKETS COMMANDS
    tickets_use: "билеты [Категория] {Опции}",
    tickets_description:
        "Билеты позволяют управлять запросами пользователей более упорядоченно, создавая билет с помощью специальной команды," +
        "будет создана `panel` (сообщение с кнопкой внизу), взаимодействуя с которой, можно будет создать личный билет.\n" +
        "**Билеты обладают разрешениями категории, в которой они созданы**\n\n" +
        ":small_blue_diamond: `ticket create`\n" +
        "Запустить создание панели для создания билетов\n" +
        ":small_blue_diamond: `ticket panel [panelID]`\n" +
        "Воссоздать ранее созданную панель\n" +
        ":small_blue_diamond: `ticket edit [panelID]`\n" +
        "Изменить настройки панели\n" +
        ":small_blue_diamond: `ticket delete [panelID]`\n" +
        "Окончательно удалить панель\n" +
        ":small_blue_diamond: `ticket logs [#Канал/ID | None]`\n" +
        "Установка канала для регистров билетов, используйте `none`, чтобы отключить регистры \n" +
        ":small_blue_diamond: `ticket transcript-logs [#Канал/ID | None]`\n" +
        "Установка специального канала для пересылки копий билетов, отличного от канала регистров, используйте \`none\`, чтобы отключить регистры\n" +
        ":small_blue_diamond: `ticket info (panelID)`\n" +
        "Показ информации о панели, если не указана конкретная панель, будут показаны все панели\n" +
        ":small_blue_diamond: `ticket [Open/Close/Transcript]`\n" +
        "Откройте/Закройте/сохраните копия билета, в котором выполнялась команда",
    tickets_examples: "Из-за большого количества команд все примеры присутствуют в разных категориях^^",
    tickets_small_desc: "Configura la verifica tramite captcha",
    //tickets create
    tickets_creation_sys: "Система создания билетов",
    tickets_create_message: "Желаете начать создание новой панели?\n**Панель будет создана на этом канале**",
    ticket_create_exited: "Создание панели отменено.",
    tickets_create_insert_title: "Введите название билета",
    tickets_create_insert_message: "Введите сообщение, которое будет отправлять бот при создании нового билета",
    tickets_create_insert_category: "Введите ID или название категории, где будут созданы билеты.\n\n" +
        "**Примечание**: Билеты (каналы) получат разрешения этой категории",
    tickets_create_invalid_category: "Категория недействительна, попробуйте еще раз",
    tickets_create_insert_upmessage: "Чтобы добавить роли поддержки, используйте не встроенные сообщения, а обычные",
    tickets_create_insert_role: "Наберите ID или добавьте роль, которая будет заниматься билетами.\n\n" +
        "**Примечание**: К данной роли будут принудительно добавлены права на запись на канале с билетами (canale) *при необходимости*",
    tickets_create_invalid_role: "Недопустимая роль, попробуйте еще раз",
    tickets_create_confirm_message: "Подтвердите создание новой панели со следующими настройками?",
    tickets_create_confirm_message_how: "Введите \`y\` для подтверждения или \`n\` для отмены",
    //tickets general
    tickets_panel: 'Для создания билета нажмите кнопку :билеты: внизу',
    tickets_panel_footer: "Билеты от NISD",
    create_ticket: "Создание билета",
    //ticket panel
    invalid_ticket_panel: 'Панель не найдена, используйте \`tickets info\` для показа ID существующих панелей',
    tickets_panel_use: "ticket panel [panelID]",
    tickets_panel_description: "Воссоздать созданную ранее панель",
    tickets_panel_examples: "ticket panel ID",
    //ticket edit
    tickets_edit_title: "Что вы хотите изменить?",
    tickets_edit_sys: "Система модификации билетов ",
    tickets_edit_use: "ticket edit [panelID]",
    tickets_edit_description: "Измените настройки панели\n",
    tickets_edit_exited: "Отмена изменения",
    tickets_edit_examples: "ticket edit ID",
    tickets_edited: "Настройки панели сохранены",
    tickets_edited_title: "Настройки панели сохранены, использовать команду \`ticket panel [panelID]\` для их активации",
    //ticket delete
    tickets_delete_use: "ticket delete [panelID]",
    tickets_delete_description: "Окончательно удалить панель\n",
    tickets_delete_examples: "ticket delete ID",
    tickets_delete_title: (panelID) => {
        return `Удалить панель билетов \`${panelID}\`?`
    },
    tickets_delete_confirmed: ":accettato_gif: Панель билетов удалена",
    tickets_delete_exited: ":negato_gif: Отмена операции",
    tickets_delete_sys: "Система удаления билетов",
    //ticket info
    tickets_info_title: "NISD Tickets Info",
    tickets_info_description: (logs, tlogs) => {
        return `**Logs**: ${logs}\n**Transcript Logs**: ${tlogs}\n`
    },
    //ticket logs
    tickets_logs_use: "ticket logs [#Канал/ID | None]",
    tickets_logs_description: "Установите канал для регистров билетов, использовать \`none\`, чтобы отключить регистры",
    tickets_logs_examples: "ticket logs ID\nticket logs none",
    tickets_logs_success: (none, channel) => {
        return none ? "Регистры билетов больше не будут отправляться" : `Канал регистров билетов обновлен, новый канал: ${channel}`
    },
    //ticket transcript-logs
    tickets_transcriptlogs_use: "ticket transcript-logs [#Канал/ID | None]",
    tickets_transcriptlogs_description: "Установка специального канала для пересылки копий билетов, отличного от канала регистров, используйте \`none\`, чтобы отключить регистры",
    tickets_transcriptlogs_examples: "ticket transcript-logs ID\nticket transcript-logs none",
    tickets_transcriptlogs_success: (none, channel) => {
        return none ? "С этого моменты копии билетов опять будут отправляться на канале регистров (если определен) или билетов (в противном случае)" : `Канал дял пересылки копий билетов обновлен, новый канал: ${channel}`
    },
    //language
    lang_use: "lang [язык]",
    lang_description: "Выберите язык бота на данном сервере",
    lang_examples: "`lang it`\n`lang en`\n`lang ru`",
    //autoroles
    autoroles_use: "autoroles [user/bot | list] {role}",
    autoroles_description: "Set roles for users / bots to add as soon as they enter the server, redoing the command with the same role will remove it from the list\n\n" +
        ":small_blue_diamond: `autoroles user/bot [@Role/ID]`\n" +
        "Add/Remove a role from the list\n" +
        ":small_blue_diamond: `autoroles list`\n" +
        "Check your current autoroles",
    autoroles_examples:
        "`autoroles user @Role`\n" +
        "`autoroles bot id`\n" +
        "`autoroles list`",
    autoroles_small_desc: "Automatically add roles to new users/bots",
    autoroles_add: (role) => {return `Added ${role} to autoroles`},
    autoroles_remove: (role) => {return `Removed ${role} from autoroles`},
    //autoroles list
    autoroles_list: "AutoRoles List",
    //logs
    logs_use: "logs",
    logs_description: "The logs allow you to keep track of all the actions performed on the server\n\n" +
        "**This function is configurable only via [[Dashboard]](https://nisdbot.xyz/)**",
    logs_small_description: "The logs allow you to keep track of all the actions performed on the server",
    //logs events
    logs_channelCreate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `New text channel created (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `New voice channel created (${channel})`
            case "GUILD_CATEGORY":
                return `New category created (${channel})`
            default:
                return `New channel created (${channel})`

        }
    },
    logs_channelDelete_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Text channel deleted (${channel.name})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Voice channel deleted (${channel.name})`
            case "GUILD_CATEGORY":
                return `Category deleted (${channel.name})`
            default:
                return `Channel deleted (${channel.name})`
        }
    },
    logs_channelUpdate_description: (channel) => {
        switch (channel.type) {
            case "GUILD_TEXT":
                return `Textual channel updated (${channel})`
            case "GUILD_VOICE":
            case "GUILD_STAGE_VOICE":
                return `Voice channel updated (${channel})`
            case "GUILD_CATEGORY":
                return `Category updated (${channel.name})`
            default:
                return `Channel updated (${channel.name})`
        }
    },
    overwrites_removed_for: "Permissions removed for",
    added_overwrites_for: "Permissions added for",
    logs_roleCreate_description: (role) => {
        return `New role created (${role})`
    },
    logs_roleDelete_description: (role) => {
        return `Role deleted (${role.name})`
    },
    logs_roleUpdate_description: (role) => {
        return `Role updated (${role})`
    },
    logs_messageDelete_description: (channel) => {
        return `Deleted message in ${channel} (${channel.name})`
    },
    logs_message_sent_above: "Message sent after embed due to length...",
    logs_message_bulk_description: (count) => {
        return `**${count}** messages have been deleted and saved`
    },
    logs_message_update_description: (message) => {
        return `**${message.author.username}#${message.author.discriminator}** changed their message in ${message.channel}`
    },
    logs_member_remove_description: (member) => {
        return `**${member.user.username}#${member.user.discriminator}** left the server`
    },
    logs_member_update_description: (member, author) => {
        return `L'utente **${member.user.username}#${member.user.discriminator}** updated by ${author}`
    },
    logs_member_join_description: (member) => {
        return `**${member}** joined the server`
    },
    logs_invite_used: (invite, user) => {

        if (!user) {
            user = "Uknown"
        } else {
            user = `${user.username}#${user.discriminator}`
        }

        return `Used invite ${invite} created by ${user}`
    },
    logs_invite_impossibile() {
        return "Unable to find the invitation, a vanity url was probably used"
    },
    logs_member_kicked(member, author) {
        return `**${member.user.username}#${member.user.discriminator}** has been kicked by ${author}`
    },
    logs_member_banned(user, author) {
        return `**${user.username}#${user.discriminator}** has been banned by ${author}`
    },
    logs_member_unbanned(user, author) {
        return `**${user.username}#${user.discriminator}** has been unbanned by ${author}`
    },
    logs_guild_updated(author) {
        return `**${author.user.username}#${author.user.discriminator}** updated the server`
    },
    logs_emoji_create(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** created the emoji **${emoji.name}**`
    },
    logs_emoji_delete(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** deleted the emoji **${emoji.name}**`
    },
    logs_emoji_update(emoji, author) {
        return `**${author.user.username}#${author.user.discriminator}** updated the emoji **${emoji.name}**`
    },
    logs_voice_update(member, author) {
        return `**${member.user.username}#${member.user.discriminator}** had their voice state updated by **${author.user.username}#${author.user.discriminator}**`
    },
    logs_voice_join(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** joined voice channel **${channel.name}**`
    },
    logs_voice_leave(member, channel) {
        return `**${member.user.username}#${member.user.discriminator}** left voice channel **${channel.name}**`
    },
    logs_voice_switch(member, oldChannel, newChannel) {
        return `**${member.user.username}#${member.user.discriminator}** switched from voice channel **${oldChannel.name}** to voice channel **${newChannel.name}**`
    },
}


