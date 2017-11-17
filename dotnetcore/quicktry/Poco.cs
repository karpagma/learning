class Sort
{
    public int Order { get; set; }
}

class Poco
{
    public bool Enabled { get; set; }
    public Sort Sort { get; set; }

    public override string ToString()
    {
        return $"Enabled={Enabled}, SortOrder={Sort.Order}";
    }
}