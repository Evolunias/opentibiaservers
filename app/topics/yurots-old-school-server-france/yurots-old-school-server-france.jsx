import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-france');
}

export default function YurotsOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-france" />;
}
