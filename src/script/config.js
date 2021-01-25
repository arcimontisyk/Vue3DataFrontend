cmd_config: {
    "address": 32,
    "length": 8,
    "commands": {
        "tau": {
            "type": "value",
            "position": 2,
            "length": 2,
            "byte_order": "big",
            "signed": 0
        },
        "BREAK_HOLD_RELEASED": {
            "type": "status",
            "byte_pos": 7,
            "bit_pos": 4
        },
        "BREAK_RELEASE": {
            "type": "status",
            "byte_pos": 7,
            "bit_pos": 3
        },
        "enable_DRV": {
            "type": "status",
            "byte_pos": 7,
            "bit_pos": 2
        },
        "clear_flags": {
            "type": "status",
            "byte_pos": 7,
            "bit_pos": 1
        },
        "reset_theta": {
            "type": "status",
            "byte_pos": 7,
            "bit_pos": 0
        }
    }
}