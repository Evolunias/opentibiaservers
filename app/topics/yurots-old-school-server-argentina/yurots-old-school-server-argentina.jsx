import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-argentina');
}

export default function YurotsOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-argentina" />;
}
