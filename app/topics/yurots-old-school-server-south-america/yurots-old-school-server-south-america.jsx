import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-south-america');
}

export default function YurotsOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-south-america" />;
}
