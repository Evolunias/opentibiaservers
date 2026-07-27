import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-poland');
}

export default function YurotsOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-poland" />;
}
