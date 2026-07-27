import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-germany');
}

export default function YurotsOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-germany" />;
}
