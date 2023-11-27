function getAcceleration(a) {
    if(a.t && a.d)
    {return (2*a.d)/(a.t*a.t);}
    else
    {
        if(a.Δt && a.Δv)
        {return a.Δv/a.Δt;}
        else
        {
            if(a.m && a.f)
            {return a.f/a.m;}
        }
    }
return "impossible";
}