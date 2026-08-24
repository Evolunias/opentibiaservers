import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("zeno-tide-both-clients");
}

export default function Page() {
  return <LegacyServerRoute slug="zeno-tide-both-clients" />;
}
