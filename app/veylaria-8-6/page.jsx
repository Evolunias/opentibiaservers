import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("veylaria-8-6");
}

export default function Page() {
  return <LegacyServerRoute slug="veylaria-8-6" />;
}
