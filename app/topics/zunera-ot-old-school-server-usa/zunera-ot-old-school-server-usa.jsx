import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-usa');
}

export default function ZuneraOtOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-usa" />;
}
