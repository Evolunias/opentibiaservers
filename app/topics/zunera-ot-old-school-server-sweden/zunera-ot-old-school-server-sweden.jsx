import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-sweden');
}

export default function ZuneraOtOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-sweden" />;
}
