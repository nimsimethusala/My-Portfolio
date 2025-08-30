/*
const ProfileImage = ({ isLoaded }: { isLoaded: boolean }) => {
    return (
        <div className={`relative ${isLoaded ? 'animate-slide-down' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="relative w-80 h-80 mx-auto">
                {/!* Animated rings *!/}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-red-400 to-orange-300 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-orange-300/50 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-yellow-300/30 animate-pulse"></div>

                {/!* Profile image placeholder *!/}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-red-400/20 to-orange-300/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                {/!* Floating skill badges *!/}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-400 px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                    React
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-yellow-400 px-3 py-1 rounded-full text-sm font-semibold animate-bounce" style={{animationDelay: '0.5s'}}>
                    Node.js
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;*/
