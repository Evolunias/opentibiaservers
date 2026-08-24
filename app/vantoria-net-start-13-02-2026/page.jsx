import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("vantoria-net-start-13-02-2026");
}

export default function Page() {
  return <LegacyServerRoute slug="vantoria-net-start-13-02-2026" />;
}
